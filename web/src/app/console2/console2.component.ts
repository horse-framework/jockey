import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { filter, takeUntil } from 'rxjs/operators';
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
  element: HTMLDivElement;
  search: string = '';

  showTime: boolean = true;
  showMessageId: boolean = true;
  showContentType: boolean = false;
  autoScroll: boolean = true;

  private _messages: ConsoleMessage[] = [];
  private _datePipe = new DatePipe('en-US');

  constructor(
    private _destroy$: DestroyService,
    private _socket$: WebsocketService) { }

  ngOnInit(): void {

    this.element = document.getElementById('console') as HTMLDivElement;

    this._socket$.onmessage
      .pipe(
        takeUntil(this._destroy$),
        filter(msg => msg.type === SocketModels.ConsoleMessage)
      )
      .subscribe(msg => this.addMessage(msg.payload));
  }

  toggleTime(): void {
    this.showTime = !this.showTime;
    this.redraw();
  }

  toggleMessageId(): void {
    this.showMessageId = !this.showMessageId;
    this.redraw();
  }

  toggleContentType(): void {
    this.showContentType = !this.showContentType;
    this.redraw();

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
    this._messages = [];
    this.redraw();
  }

  private redraw(): void {

    let html = '';

    this._messages.forEach(message => {
      if (this.isInFilter(message))
        html += this.createMessageHtml(message);
    });

    this.element.innerHTML = html;
    this.element.scrollTop = this.element.scrollHeight;
  }

  private addMessage(message: ConsoleMessage): void {

    if (this._messages.length > this.MessageLimit + 100)
      this._messages.splice(0, 200);

    this._messages.push(message);

    if (this.isInFilter(message)) {
      this.element.append(this.createMessageElement(message));

      if (this.autoScroll)
        this.element.scrollTop = this.element.scrollHeight;
    }
  }

  private createMessageElement(message: ConsoleMessage): HTMLDivElement {
    const html = (this.showTime ? '<em>' + this._datePipe.transform(message.date * 1000, 'HH:mm:ss') + '</em>' : '') +
      '<strong>' + message.name + '</strong>' +
      (this.showContentType ? '<span>' + message.contentType + '</span>' : '') +
      '<div>' +
      (this.showMessageId ? '<b>' + message.messageId + '</b>' : '') +
      '<p>' + message.message + '</p>';


    const div = document.createElement('div');
    div.className = 'citem';
    div.innerHTML = html;
    return div;
  }

  private createMessageHtml(message: ConsoleMessage): string {

    return '<div class="citem">' +
      (this.showTime ? '<em>' + this._datePipe.transform(message.date * 1000, 'HH:mm:ss') + '</em>' : '') +
      '<strong>' + message.name + '</strong>' +
      (this.showContentType ? '<span>' + message.contentType + '</span>' : '') +
      '<div>' +
      (this.showMessageId ? '<b>' + message.messageId + '</b>' : '') +
      '<p>' + message.message + '</p>' +
      '</div>' +
      '</div>';
  }

  private isInFilter(message: ConsoleMessage): boolean {
    if (this.search.length < 1)
      return true;

    return message.messageId.includes(this.search) || message.message.includes(this.search);
  }

}
