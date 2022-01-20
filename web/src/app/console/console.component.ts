import {
  ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit,
  TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation
} from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, merge, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, delayWhen, distinctUntilChanged, filter, map, pluck, switchMap, take, takeLast, takeUntil, tap } from 'rxjs/operators';
import { SocketModels } from 'src/lib/socket-models';
import { ConsoleRequest } from 'src/models/console-request';
import { ConsoleMessage } from 'src/models/console.message';
import { DestroyService } from 'src/services/destroy.service';
import { WebsocketService } from 'src/services/websocket.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService],
  encapsulation: ViewEncapsulation.None
})
export class ConsoleComponent implements OnInit {

  source: string = 'queue';
  targetType: string = 'name';
  target: string = '';
  search: string = '';

  showTime: boolean = true;
  showMessageId: boolean = true;
  showContentType: boolean = false;
  autoScroll: boolean = true;
  isJson: boolean = false;
  clearTrigger$ = new Subject();
  triggerFilter$ = new Subject();
  pause: boolean = false;

  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement>;
  @ViewChild('consoleContainer', { static: true, read: ViewContainerRef }) consoleContainer: ViewContainerRef;
  @ViewChild('consoleTable', { static: true, read: ElementRef }) consoleTable: ElementRef<HTMLTableElement>;
  @ViewChild('messageTemplate', { static: true, read: TemplateRef }) messageTemplate: TemplateRef<any>;
  @ViewChild('searchInput', { static: true, read: ElementRef }) searchInput: ElementRef<HTMLInputElement>;
  @ViewChild('applied', { static: true, read: ElementRef }) applied: ElementRef<HTMLSpanElement>;

  get colspan(): number {
    let span = 0;
    if (this.showMessageId)
      span++;
    return span;
  }

  private readonly _messageLimit: number = 10000;
  private readonly _renderLimit: number = 200;
  private _renderedMessage: number = 0;
  private _pause$ = new BehaviorSubject<boolean>(false);
  private _messages = new Set<ConsoleMessage>();

  constructor(
    private _destroy$: DestroyService,
    private _socket$: WebsocketService,
    private _ngZone: NgZone) { }

  ngOnInit(): void {

    fromEvent(this.searchInput.nativeElement, 'input')
      .pipe(
        takeUntil(this._destroy$),
        debounceTime(750),
        distinctUntilChanged(),
        tap(() => {
          this.consoleContainer.clear();
          this._renderedMessage = 0;
        }),
        switchMap(() => from(this._messages)
          .pipe(
            this.isInFilter(),
            takeLast(this._renderLimit),
            this.renderMessage()
          ),
        ),
      ).subscribe(),

      merge(
        this._socket$.onmessage.pipe(
          filter(msg => msg.type === SocketModels.ConsoleMessage),
          pluck('payload'),
          map((message: ConsoleMessage) => {
            try {
              message.messageObj = JSON.parse(message.message);
            }
            catch { }
            return message;
          }),
          tap((message) => {
            if (this._messages.size >= this._messageLimit) {
              const first = this._messages.values().next();
              this._messages.delete(first.value);
            }
            this._messages.add(message);
          }),
          delayWhen(() => this._pause$.pipe(filter((v) => !v))),
          this.isInFilter(),
          this.renderMessage()
        ),
        this.clearTrigger$.pipe(tap(() => {
          this.consoleContainer.clear();
          this._messages.clear();
          this._renderedMessage = 0;
        }))
      ).pipe(
        takeUntil(this._destroy$),
      ).subscribe();

    this._ngZone.runOutsideAngular(() => {
      interval(10).pipe(
        takeUntil(this._destroy$),
        filter(() => this.autoScroll && !this.pause &&
          this.consoleTable.nativeElement.scrollTop !== this.consoleTable.nativeElement.scrollHeight),
        tap(() => (this.container.nativeElement.scrollTo({ top: this.container.nativeElement.scrollHeight })))
      ).subscribe();
    });

  }

  toggleTime(): void {
    this.showTime = !this.showTime;
  }

  toggleMessageId(): void {
    this.showMessageId = !this.showMessageId;
  }

  toggleContentType(): void {
    this.showContentType = !this.showContentType;
  }

  toggleAutoScroll(): void {
    this.autoScroll = !this.autoScroll;
  }

  toggleJson(): void {
    this.isJson = !this.isJson;
  }

  togglePause(): void {
    this.pause = !this.pause;
    this._pause$.next(this.pause);
  }

  submit(): void {

    const request: ConsoleRequest = {
      requestId: new Date().getTime().toString(),
      source: this.source,
      targetType: this.targetType,
      target: this.target
    };

    this._socket$.send(SocketModels.ConsoleRequest, request);

    this.applied.nativeElement.setAttribute('class', 'applied show');
    of(this.applied)
      .pipe(delay(1000), take(1))
      .subscribe(t => t.nativeElement.setAttribute('class', 'applied'));
  }

  clear(): void {
    this.clearTrigger$.next();
  }

  private isInFilter = () => (source: Observable<ConsoleMessage>) =>
    source.pipe(
      filter((message) => {
        if (this.search.length < 1)
          return true;

        return message.messageId.includes(this.search) || message.message.includes(this.search);
      })
    )
  private renderMessage = () => (source: Observable<ConsoleMessage>) =>
    source.pipe(
      tap((message) => {
        if (this._renderedMessage >= this._renderLimit) {
          this.consoleTable.nativeElement.firstChild?.remove();
          this._renderedMessage--;
        }
        const template = this.consoleContainer.createEmbeddedView(this.messageTemplate, {
          $implicit: message
        });
        template.detectChanges();
        this._renderedMessage++;
      })
    )
}
