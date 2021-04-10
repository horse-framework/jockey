import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, takeWhile } from 'rxjs/operators';
import { SocketModels } from 'src/lib/socket-models';
import { ConsoleRequest } from 'src/models/console-request';
import { ConsoleMessage } from 'src/models/console.message';
import { WebsocketService } from 'src/services/websocket.service';

@Component({
    selector: 'app-console',
    templateUrl: './console.component.html',
    styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit, OnDestroy {

    readonly MessageLimit: number = 1000;

    active: boolean = true;
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

    constructor(private socket: WebsocketService) { }

    ngOnInit(): void {

        this.active = true;
        this.element = <HTMLDivElement>document.getElementById('console');

        this.socket.onmessage
            .pipe(
                takeWhile(() => this.active),
                filter(msg => msg.type == SocketModels.ConsoleMessage)
            )
            .subscribe(msg => this.addMessage(msg.payload));
    }

    ngOnDestroy(): void {
        this.active = false;
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

        let request: ConsoleRequest = {
            requestId: new Date().getTime().toString(),
            source: this.source,
            targetType: this.targetType,
            target: this.target
        };

        this.socket.send(SocketModels.ConsoleRequest, request);
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

        if (this._messages.length > this.MessageLimit + 100) {
            this._messages.splice(0, 200);
        }

        this._messages.push(message);

        if (this.isInFilter(message)) {
            this.element.append(this.createMessageElement(message));

            if (this.autoScroll)
                this.element.scrollTop = this.element.scrollHeight;
        }
    }

    private createMessageElement(message: ConsoleMessage): HTMLDivElement {
        let html = (this.showTime ? '<em>' + this._datePipe.transform(message.date * 1000, 'HH:mm:ss') + '</em>' : '') +
            '<strong>' + message.name + '</strong>' +
            (this.showContentType ? '<span>' + message.contentType + '</span>' : '') +
            '<div>' +
            (this.showMessageId ? '<b>' + message.messageId + '</b>' : '') +
            '<p>' + message.message + '</p>';


        let div = document.createElement('div');
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
