import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiClient } from 'src/lib/api-client';
import { HorseQueue } from 'src/models/horse-queue';
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

    create(queue: HorseQueue): Promise<TransactionResult> {
        return null;
    }

    update(queue: HorseQueue): Promise<TransactionResult> {
        return null;
    }

    remove(queue: HorseQueue): Promise<TransactionResult> {
        return null;
    }
}
