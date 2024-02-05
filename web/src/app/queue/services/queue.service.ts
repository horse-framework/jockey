import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { HorseQueue, HorseQueueSummary } from 'src/app/queue/models/horse-queue';
import { QueueCreateModel } from 'src/app/queue/models/queue-create-model';
import { QueueMessage, QueuePushMessage } from 'src/app/queue/models/queue-message';
import { WebsocketService } from '../../../services/websocket.service';
import { QueueGraphData } from '../models/queue-graph-data';
import { DateHelper } from 'src/lib/date-helper';

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

    constructor(private api: ApiClient, private socket: WebsocketService) { }

    list(): Promise<HorseQueue[]> {

        return this.api.get('/queue/list')
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    listSummary(): Promise<HorseQueueSummary[]> {

        return this.api.get('/queue/list-names')
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    getManagers(): Promise<string[]> {

        return this.api.get('/queue/managers')
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    get(name: string): Promise<HorseQueue> {

        return this.api.get('/queue/get?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    getGraph(name: string): Promise<QueueGraphData> {

        let url = '/queue/graph';
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }

        return of(this)
            .pipe(
                mergeMap(() => this.api.get(url)),
                map(response => {

                    if (!response.success)
                        return null;

                    let result: QueueGraphData = {
                        store: {
                            n: response.data.name,
                            d: response.data.store
                        },
                        stream: {
                            n: response.data.name,
                            d: response.data.stream
                        }
                    };

                    result.store.labels = DateHelper.createLabels(result.store.d.map(x => x.u));
                    result.stream.labels = DateHelper.createLabels(result.stream.d.map(x => x.u));

                    return result;
                })
            )
            .toPromise();
    }

    create(model: QueueCreateModel): Promise<any> {

        return this.api.post('/queue/create', model)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    setOption(queueName: string, optionName: string, value: any): Promise<any> {

        let model = {
            target: queueName,
            name: optionName,
            value: value
        };

        return this.api.put('/queue/option', model)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    push(message: QueuePushMessage): Promise<any> {

        return this.api.post('/queue/push', message)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    read(name: string): Promise<QueueMessage> {

        return this.api.get('/queue/read?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    consume(name: string): Promise<QueueMessage> {

        return this.api.get('/queue/consume?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    status(name: string, status: string): Promise<any> {
        let form = new FormData();
        form.append('name', name);
        form.append('status', status);
        return this.api.putForm('/queue/status', form)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    clear(name: string): Promise<any> {
        let form = new FormData();
        form.append('name', name);
        return this.api.putForm('/queue/clear', form)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    delete(name: string): Promise<any> {
        return this.api.delete('/queue/delete?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    move(name: string, target: string): Promise<any> {

        let form = new FormData();
        form.append('name', name);
        form.append('target', target);

        return this.api.postForm('/queue/move-messages', form)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    copy(name: string, target: string): Promise<any> {

        let form = new FormData();
        form.append('name', name);
        form.append('target', target);

        return this.api.postForm('/queue/copy-messages', form)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    resetStats(name: string): Promise<any> {
        return this.api.putForm('/queue/reset-stats', null)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }
}
