import { inject, Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { QueueGraphData } from '../models/queue-graph-data';
import { HorseQueue, HorseQueueSummary } from '../models/horse-queue';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { QueueCreateModel } from '../models/queue-create-model';
import { QueueMessage, QueuePushMessage } from '../models/queue-message';

@Injectable({
    providedIn: 'root'
})
export class QueueService {

    private _queues: HorseQueue[] = [];
    private _oncreated: Subject<HorseQueue> = new Subject<HorseQueue>();
    private _onremoved: Subject<HorseQueue> = new Subject<HorseQueue>();
    private _onupdated: Subject<HorseQueue> = new Subject<HorseQueue>();

    get queues(): HorseQueue[] { return this._queues; }
    get oncreated(): Observable<HorseQueue> { return this._oncreated; }
    get onremoved(): Observable<HorseQueue> { return this._onremoved; }
    get onupdated(): Observable<HorseQueue> { return this._onupdated; }

    readonly #http: HttpClient = inject(HttpClient);

    list(): Observable<HttpResponse<HorseQueue[]>> {
        return this.#http.get<HorseQueue[]>('/queue/list', { observe: 'response' });
    }

    listSummary(): Observable<HttpResponse<HorseQueueSummary[]>> {
        return this.#http.get<HorseQueueSummary[]>('/queue/list-names', { observe: 'response' });
    }

    getManagers(): Observable<HttpResponse<string[]>> {
        return this.#http.get<string[]>('/queue/managers', { observe: 'response' });
    }

    get(name: string): Observable<HttpResponse<HorseQueue>> {
        return this.#http.get<HorseQueue>('/queue/get?name=' + name, { observe: 'response' });
    }

    getGraph(name: string): Observable<QueueGraphData> {

        let url = '/queue/graph';
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }

        return of(this)
            .pipe(
                mergeMap(() => this.#http.get<QueueGraphData>(url, { observe: 'response' })),
                map(response => {

                    /* TODO:
                    if (!response.ok)
                        return null;

                    let data = response.body!;

                    let result: QueueGraphData = {
                        store: {
                            n: data.name,
                            d: data.store!
                        },
                        stream: {
                            n: data.name,
                            d: data.stream!
                        }
                    };

                    result.store.labels = DateHelper.createLabels(result.store.d.map(x => x.u));
                    result.stream.labels = DateHelper.createLabels(result.stream.d.map(x => x.u));

                    return result;
                    */

                    return response.body!;
                })
            );
    }

    create(model: QueueCreateModel): Observable<HttpResponse<any>> {
        return this.#http.post('/queue/create', model, { observe: 'response' });
    }

    setOption(queueName: string, optionName: string, value: any): Observable<HttpResponse<any>> {
        let model = { target: queueName, name: optionName, value: value };
        return this.#http.put('/queue/option', model, { observe: 'response' });
    }

    push(message: QueuePushMessage): Observable<HttpResponse<any>> {
        return this.#http.post('/queue/push', message, { observe: 'response' });
    }

    read(name: string): Observable<HttpResponse<QueueMessage>> {
        return this.#http.get<QueueMessage>('/queue/read?name=' + name, { observe: 'response' });
    }

    consume(name: string): Observable<HttpResponse<QueueMessage>> {
        return this.#http.get<QueueMessage>('/queue/consume?name=' + name, { observe: 'response' });
    }

    status(name: string, status: string): Observable<HttpResponse<any>> {
        let form = new FormData();
        form.append('name', name);
        form.append('status', status);
        return this.#http.put('/queue/status', form, { observe: 'response' });
    }

    clear(name: string): Observable<HttpResponse<any>> {
        let form = new FormData();
        form.append('name', name);
        return this.#http.put('/queue/clear', form, { observe: 'response' });
    }

    delete(name: string): Observable<HttpResponse<any>> {
        return this.#http.delete('/queue/delete?name=' + name, { observe: 'response' });
    }

    move(name: string, target: string): Observable<HttpResponse<any>> {

        let form = new FormData();
        form.append('name', name);
        form.append('target', target);

        return this.#http.post('/queue/move-messages', form, { observe: 'response' });
    }

    copy(name: string, target: string): Observable<HttpResponse<any>> {

        let form = new FormData();
        form.append('name', name);
        form.append('target', target);

        return this.#http.post('/queue/copy-messages', form, { observe: 'response' });
    }

    resetStats(name: string): Observable<HttpResponse<any>> {
        return this.#http.put('/queue/reset-stats', null, { observe: 'response' });
    }
}
