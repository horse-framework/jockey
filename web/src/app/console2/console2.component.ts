import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
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

  readonly MessageLimit: number = 1000;

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
  @ViewChild('console', { read: ViewContainerRef }) console: ViewContainerRef;
  @ViewChild('messageTemplate', { read: TemplateRef }) messageTemplate: TemplateRef<any>;

  get colspan(): number {
    let span = 0;
    if (this.showContentType)
      span++;
    if (this.showMessageId)
      span++;
    return span;
  }

  constructor(
    private _destroy$: DestroyService,
    private _socket$: WebsocketService,
    private _ngZone: NgZone) { }

  ngOnInit(): void {
    merge(
      this._socket$.onmessage.pipe(
        filter(msg => msg.type === SocketModels.ConsoleMessage),
        pluck('payload'),
        map(this._addMessage)
      ),
      this.clearTrigger$.pipe(map(this._clearMessages))
    ).pipe(
      takeUntil(this._destroy$),
      tap(() => {
        this.console.createEmbeddedView(this.messageTemplate, {
          $implicit$: {}
        });
      }),
      tap(() => {
        if (this.autoScroll)
          this._ngZone.runOutsideAngular(() => this.container.nativeElement.scrollTo({
            behavior: 'auto',
            top: this.container.nativeElement.scrollHeight
          }));
      })
    ).subscribe();
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

  trackByFn = (index: number, item: ConsoleMessage) => item.messageId;

  private _addMessage = (message: ConsoleMessage) => () => {
    this.console.createEmbeddedView(this.messageTemplate, {
      $implicit$: message
    });
  }
  private _clearMessages = () => () => {
    this.console.clear();
  }
}
