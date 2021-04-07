import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { HorseClient } from 'src/models/horse-client';
import { TransactionResult } from 'src/models/transaction-result';
import { WebsocketService } from './websocket.service';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    private _clients: HorseClient[] = [];
    private _onconnected: Subject<HorseClient> = new Subject<HorseClient>();
    private _ondisconnected: Subject<HorseClient> = new Subject<HorseClient>();

    get clients(): HorseClient[] { return this._clients; }
    get onconnected(): Observable<HorseClient> { return this._onconnected; }
    get ondisconnected(): Observable<HorseClient> { return this._ondisconnected; }

    constructor(private api: ApiClient, private socket: WebsocketService) { }

    list(): Promise<HorseClient[]> {
        return this.api.get('/client/list')
            .pipe(
                map(response => {
                    if (response.ok()) {
                        this._clients = response.data;
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    refresh(): Promise<TransactionResult> {
        return null;
    }

    remove(client: HorseClient): Promise<TransactionResult> {
        return null;
    }

}
