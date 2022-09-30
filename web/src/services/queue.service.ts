import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { HorseQueue, HorseQueueSummary } from 'src/models/horse-queue';
import { QueueCreateModel } from 'src/models/queue-create-model';
import { QueueMessage, QueuePushMessage } from 'src/models/queue-message';
import { TransactionResult } from 'src/models/transaction-result';
import { WebsocketService } from './websocket.service';

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
            queue: queueName,
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
}
