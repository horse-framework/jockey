import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SocketModels } from 'src/lib/socket-models';

export enum WebClientStatus {
    Disconnected,
    Connecting,
    Connected
}

export interface SocketMessage {
    type: string;
    payload: any;
}

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {

    private _status: WebClientStatus;
    private _socket: WebSocket;

    private _onconnected: Subject<WebsocketService> = new Subject<WebsocketService>();
    private _ondisconnected: Subject<WebsocketService> = new Subject<WebsocketService>();
    private _onmessage: Subject<SocketMessage> = new Subject<SocketMessage>();

    get onconnected(): Observable<WebsocketService> { return this._onconnected; }
    get ondisconnected(): Observable<WebsocketService> { return this._ondisconnected; }
    get onmessage(): Observable<SocketMessage> { return this._onmessage; }
    get status(): WebClientStatus { return this._status; }

    constructor() { }

    connect(token: string): void {

        //const host = environment.api.websocket + '?token=' + token;
        const host = 'ws://' + location.host + '?token=' + token;
        this._socket = new WebSocket(host);


        this._socket.onopen = (ev: Event) => {
            this._status = WebClientStatus.Connected;
            this._onconnected.next(this);
        };

        this._socket.onclose = (ev: Event) => {
            this._status = WebClientStatus.Disconnected;
            this._ondisconnected.next(this);
        };

        this._socket.onmessage = this.messageReceived.bind(this);
    }

    send(type: string, model: any): boolean {

        if (!this._socket || this._status !== WebClientStatus.Connected)
            return false;

        const message: SocketMessage = {
            type,
            payload: model
        };

        const str = JSON.stringify(message);
        this._socket.send(str);
        return true;
    }

    disconnect(): void {
        if (this._socket != null) {
            try {
                this._socket.close();
            }
            catch { }
            this._status = WebClientStatus.Disconnected;
            this._socket = null;
        }
    }

    private messageReceived(event: MessageEvent) {

        const message: SocketMessage = JSON.parse(event.data);
        if (message == null || message.type == null || message.payload == null)
            return;

        this._onmessage.next(message);
    }
}
