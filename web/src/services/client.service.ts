import { inject, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';
import { HorseClient } from '../app/client/models/horse-client';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HorseClientDetail } from '../app/client/models/horse-client-detail';
import { TransactionResult } from '../models/transaction-result';
import { MessageCount } from '../models/message-count';
import { DateHelper } from '../lib/helpers/date.helper';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    readonly #http: HttpClient = inject(HttpClient);

    private _clients: HorseClient[] = [];
    private _onconnected: Subject<HorseClient> = new Subject<HorseClient>();
    private _ondisconnected: Subject<HorseClient> = new Subject<HorseClient>();

    get clients(): HorseClient[] { return this._clients; }
    get onconnected(): Observable<HorseClient> { return this._onconnected; }
    get ondisconnected(): Observable<HorseClient> { return this._ondisconnected; }

    list(): Observable<HttpResponse<HorseClient[]>> {
        return this.#http.get<HorseClient[]>('/client/list', { observe: 'response' });
    }

    get(id: string): Observable<HttpResponse<HorseClientDetail>> {
        return this.#http.get<HorseClientDetail>('/client/get?id=' + id, { observe: 'response' });
    }

    refresh(): Observable<TransactionResult> | null {
        return null;
    }

    remove(client: HorseClient): Observable<TransactionResult> | null {
        return null;
    }

    getGraph(name: string): Observable<MessageCount | null> {

        let url = '/client/graph';
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }

        return of(this)
            .pipe(
                take(1),
                mergeMap(() => this.#http.get<MessageCount>(url, { observe: 'response' })),
                map(response => {

                    if (!response.ok || !response.body)
                        return null;

                    let result = response.body;
                    result.labels = DateHelper.createLabels(result.d.map(x => x.u));

                    return result;
                })
            );
    }

}
