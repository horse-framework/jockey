import {
  ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnInit,
  TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { interval, merge, Observable, Subject } from 'rxjs';
import { filter, pluck, takeUntil, tap } from 'rxjs/operators';
import { SocketModels } from 'src/lib/socket-models';
import { ConsoleRequest } from 'src/models/console-request';
import { ConsoleMessage } from 'src/models/console.message';
import { DestroyService } from 'src/services/destroy.service';
import { WebsocketService } from 'src/services/websocket.service';

@Component({
  selector: 'app-console2',
  templateUrl: './console2.component.html',
  styleUrls: ['./console2.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class Console2Component implements OnInit {


  source: string = 'queue';
  targetType: string = 'name';
  target: string = '';
  search: string = '';

  showTime: boolean = true;
  showMessageId: boolean = true;
  showContentType: boolean = false;
  autoScroll: boolean = true;
  messages$ = new Observable<Array<ConsoleMessage>>();
  clearTrigger$ = new Subject();
  triggerFilter$ = new Subject();

  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement>;
  @ViewChild('consoleContainer', { static: true, read: ViewContainerRef }) consoleContainer: ViewContainerRef;
  @ViewChild('consoleTable', { static: true, read: ElementRef }) consoleTable: ElementRef<HTMLTableElement>;
  @ViewChild('messageTemplate', { static: true, read: TemplateRef }) messageTemplate: TemplateRef<any>;

  get colspan(): number {
    let span = 0;
    if (this.showContentType)
      span++;
    if (this.showMessageId)
      span++;
    return span;
  }

  private readonly _messageLimit: number = 100;
  private _renderedMessage: number = 0;

  constructor(
    private _destroy$: DestroyService,
    private _socket$: WebsocketService,
    private _cd: ChangeDetectorRef,
    private _ngZone: NgZone) { }

  ngOnInit(): void {

    merge(
      this._socket$.onmessage.pipe(
        filter(msg => msg.type === SocketModels.ConsoleMessage),
        pluck('payload'),
        tap((message) => {
          if (this._renderedMessage >= this._messageLimit)
            this.consoleTable.nativeElement.firstChild.remove();

          const template = this.consoleContainer.createEmbeddedView(this.messageTemplate, {
            $implicit: message
          });
          template.detectChanges();
          this._renderedMessage++;
        }),
      ),
      this.clearTrigger$.pipe(tap(() => {
        this.consoleContainer.clear();
        this._renderedMessage = 0;
      }))
    ).pipe(
      takeUntil(this._destroy$),
    ).subscribe();

    this._ngZone.runOutsideAngular(() => {
      interval(10).pipe(
        takeUntil(this._destroy$),
        filter(() => this.autoScroll && this.consoleTable.nativeElement.scrollTop !== this.consoleTable.nativeElement.scrollHeight),
        tap(() => (this.consoleTable.nativeElement.lastElementChild as HTMLTableRowElement)?.scrollIntoView())
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

  submit(): void {

    const request: ConsoleRequest = {
      requestId: new Date().getTime().toString(),
      source: this.source,
      targetType: this.targetType,
      target: this.target
    };

    this._socket$.send(SocketModels.ConsoleRequest, request);
  }

  clear(): void {
    this.clearTrigger$.next();
  }

}
