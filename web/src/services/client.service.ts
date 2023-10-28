import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { HorseClient } from 'src/app/client/models/horse-client';
import { TransactionResult } from 'src/models/transaction-result';
import { WebsocketService } from './websocket.service';
import { DateHelper } from 'src/lib/date-helper';
import { HorseClientDetail } from 'src/app/client/models/horse-client-detail';
import { MessageCount } from 'src/models/message-count';

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

    get(id: string): Promise<HorseClientDetail> {
        return this.api.get('/client/get?id=' + id)
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

    getGraph(name: string, resolution: string): Promise<MessageCount> {

        let url = '/client/graph?resolution=' + resolution;
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }

        return of(this)
            .pipe(
                mergeMap(() => this.api.get(url)),
                map(response => {

                    if (!response.success)
                        return null;

                    let result = <MessageCount>response.data;
                    result.labels = DateHelper.createLabels(result.d.map(x => x.u));

                    return result;
                })
            )
            .toPromise();
    }

}
