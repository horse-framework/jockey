import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export enum SocketClientStatus {
    Disconnected,
    Connecting,
    Connected
}

export interface SocketMessage {
    type: string;
    data: any;
}

@Injectable({
    providedIn: 'root'
})
export class WebSocketClient {

    #status: SocketClientStatus = SocketClientStatus.Disconnected;
    #socket: WebSocket | null = null;
    #host: string | null = null;

    #connected$: Subject<WebSocketClient> = new Subject<WebSocketClient>();
    #disconnected$: Subject<WebSocketClient> = new Subject<WebSocketClient>();
    #message$: Subject<SocketMessage> = new Subject<SocketMessage>();

    get connected$(): Observable<WebSocketClient> { return this.#connected$; }
    get disconnected$(): Observable<WebSocketClient> { return this.#disconnected$; }
    get message$(): Observable<SocketMessage> { return this.#message$; }
    get status$(): SocketClientStatus { return this.#status; }

    private _connecting: boolean = false;

    run(host: string): void {

        this.#host = host;
        this.connect();

        interval(2500).subscribe(() => {
            if (this.#status == SocketClientStatus.Disconnected && !this._connecting)
                this.connect();
        });
    }

    connect(): void {

        if (this._connecting) {
            return;
        }

        this._connecting = true;
        this.#socket = new WebSocket(this.#host!);
        this.#socket.onopen = (ev: Event) => {
            this._connecting = false;
            this.#status = SocketClientStatus.Connected;
            this.#connected$.next(this);
        };

        this.#socket.onclose = (ev: Event) => {
            this._connecting = false;
            this.#status = SocketClientStatus.Disconnected;
            this.#disconnected$.next(this);
        };

        this.#socket.onmessage = this.messageReceived.bind(this);
    }

    send(messageType: string, model: any): boolean {

        if (!this.#socket || this.#status !== SocketClientStatus.Connected)
            return false;

        const str = messageType + '|' + JSON.stringify(model);
        this.#socket.send(str);
        return true;
    }

    disconnect(): void {
        if (this.#socket != null) {
            try {
                this.#socket.close();
            }
            catch { }
            this.#status = SocketClientStatus.Disconnected;
            this.#socket = null;
        }
    }

    private messageReceived(event: MessageEvent) {

        let str: string = event.data;
        let index = str.indexOf('|');
        if (index < 0)
            return;

        let type = str.substring(0, index);
        let json = str.substring(index + 1);

        let message: SocketMessage = {
            type: type,
            data: JSON.parse(json)
        };

        if (message == null || message.type == null || message.data == null)
            return;

        this.#message$.next(message);
    }

    subscribe<TModel>(messageType: string): Observable<TModel> {
        return this.#message$.pipe(
            filter(m => m.type == messageType),
            map(m => m.data as TModel)
        );
    }
}