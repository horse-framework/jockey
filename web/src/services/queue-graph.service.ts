import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { GraphContent } from 'src/models/graph-content';
import { QueueGraphData } from 'src/models/queue-graph-data';
import { WebsocketService } from './websocket.service';

@Injectable({
    providedIn: 'root'
})
export class QueueGraphService {

    private _data: QueueGraphData[];
    private _labels: string[];
    private _pipe: DatePipe = new DatePipe('en-US');
    private _maxLength: number = 60;

    private _onupdated: Subject<any> = new Subject<any>();
    get onupdated(): Observable<any> { return this._onupdated; }

    constructor(private api: ApiClient, private socket: WebsocketService) {

    }

    /** Refreshes graph data */
    load(): Promise<GraphContent<QueueGraphData>> {

        return of(this)
            .pipe(
                mergeMap(() => this.api.get('/dashboard/graph')),
                map(response => {

                    if (!response.success)
                        return null;

                    this._data = response.data;

                    //remove from beginning if data contains more than max elements
                    if (this._data.length > this._maxLength) {
                        this._data.splice(0, this._data.length - this._maxLength);
                    }

                    this._labels = this.createLabels(this._data);

                    let content: GraphContent<QueueGraphData> = {
                        data: this._data,
                        labels: this._labels
                    };

                    return content;
                })
            )
            .toPromise();
    }

    /** Creates labels of graph data */
    createLabels(data: QueueGraphData[]): string[] {

        let labels = [];
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            labels.push(this.findTimeFromUnixSeconds(item.date));
        }
        return labels;
    }

    /** Returns HH:mm:ss string from unix time in seconds */
    private findTimeFromUnixSeconds(unix: number): string {
        let date = new Date(unix * 1000);
        return this._pipe.transform(date, 'HH:mm:ss');
    }
}
