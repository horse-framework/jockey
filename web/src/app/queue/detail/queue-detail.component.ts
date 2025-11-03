import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { ConfirmModalComponent } from '../../layout/portal-layout/confirm-modal/confirm-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, map, take } from 'rxjs/operators';
import { MesssageMoveModalComponent, MoveCopyResult } from './messsage-move-modal/messsage-move-modal.component';
import { QueueMessageModalComponent } from './queue-message-modal/queue-message-modal.component';
import { QueuePushModalComponent } from './queue-push-modal/queue-push-modal.component';
import { QueueOptionModalComponent } from './queue-option-modal/queue-option-modal.component';
import { QueueGraphData } from '../models/queue-graph-data';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { HorseQueue } from '../models/horse-queue';
import { ChartService } from '../../../services/chart.service';
import { WebsocketService } from '../../../services/websocket.service';
import { QueueService } from '../services/queue.service';
import { MessageCount } from '../../../models/message-count';
import { SocketModels } from '../../../lib/websockets/socket-models';
import { QueueMessage } from '../models/queue-message';

@Component({
    selector: 'queue-detail',
    templateUrl: './queue-detail.component.html',
    styleUrls: ['./queue-detail.component.css'],
    standalone: false
})
export class QueueDetailComponent extends BaseFormComponent implements OnInit, OnDestroy {

    queue: HorseQueue | null = null;
    graph: QueueGraphData | null = null;
    deliveryChart: any;
    storeChart: any;
    queueName: string | null = null;

    constructor(private dialog: MatDialog,
        private chartService: ChartService,
        private activatedRoute: ActivatedRoute,
        private socket: WebsocketService,
        private router: Router,
        private queueService: QueueService) {
        super();
    }

    async ngOnInit() {

        this.on(this.activatedRoute.params).subscribe(async p => {

            this.queueName = p['name'];
            if (this.queueName == null || this.queueName.length === 0) return;

            await this.load();
            this.subscribeWebsocket();
            this.subscribeToListRefresh().subscribe(() => this.queueService.get(this.queueName!).subscribe(r => this.queue = r.body!));
        });
    }

    private subscribeWebsocket() {

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.QueueGraph && x.payload.n == this.queueName),
                filter(() => this.deliveryChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.deliveryChart, model));

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.QueueStoreGraph && x.payload.n == this.queueName),
                filter(() => this.storeChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.storeChart, model));

        this.socket.subscribe('queue:' + this.queueName);
    }

    private async load() {
        this.queueService.get(this.queueName!)
            .subscribe(qr => {
                this.queue = qr.body!;
                this.queueService.getGraph(this.queueName!)
                    .subscribe(response => {
                        this.graph = response;

                        if (this.deliveryChart)
                            this.deliveryChart.destroy();

                        this.deliveryChart = new Chart(<any>document.getElementById('queue-delivery-chart'),
                            {
                                type: 'line',
                                data: {
                                    labels: this.graph!.stream.labels,
                                    datasets: [
                                        {
                                            label: 'Produced',
                                            borderColor: '#2070e0',
                                            data: this.graph!.stream.d.map(x => x.r),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Ack',
                                            borderColor: '#12bf4a',
                                            data: this.graph!.stream.d.map(x => x.d),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Neg. Ack',
                                            borderColor: '#c042ef',
                                            data: this.graph!.stream.d.map(x => x.rs),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Unack',
                                            borderColor: '#eec236',
                                            data: this.graph!.stream.d.map(x => x.nr),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Error',
                                            borderColor: '#ff3333',
                                            data: this.graph!.stream.d.map(x => x.e),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        }]
                                },
                                options: {
                                    hover: { mode: 'nearest', intersect: true },
                                    animation: { duration: 0 },
                                    responsive: true,
                                    scales: {
                                        x: { display: false },
                                        y: { display: true, ticks: { precision: 0 } }
                                    }
                                }
                            });

                        if (this.storeChart)
                            this.storeChart.destroy();

                        this.storeChart = new Chart(<any>document.getElementById('queue-store-chart'),
                            {
                                type: 'line',
                                data: {
                                    labels: this.graph!.store.labels,
                                    datasets: [
                                        {
                                            label: 'Msgs',
                                            borderColor: '#2070e0',
                                            data: this.graph!.store.d.map(x => x.r),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'High Prio Msgs',
                                            borderColor: '#ff9911',
                                            data: this.graph!.store.d.map(x => x.d),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Pending for Ack',
                                            borderColor: '#10a0a0',
                                            data: this.graph!.store.d.map(x => x.nr),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        },
                                        {
                                            label: 'Processing',
                                            borderColor: '#f02020',
                                            data: this.graph!.store.d.map(x => x.s),
                                            fill: false,
                                            pointRadius: 1,
                                            pointHitRadius: 8,
                                            tension: 0.2,
                                            borderWidth: 2
                                        }]
                                },
                                options: {
                                    hover: { mode: 'nearest', intersect: true },
                                    animation: { duration: 0 },
                                    responsive: true,
                                    scales: {
                                        x: { display: false },
                                        y: { display: true, ticks: { precision: 0 } }
                                    }
                                }
                            });
                    });
            });

    }

    override ngOnDestroy(): void {
        super.ngOnDestroy();

        const request = {
            requestId: new Date().getTime().toString(),
            name: null
        };

        this.socket.unsubscribe('queue:' + this.queueName);
    }

    push(): void {
        let dialogRef = this.dialog.open(QueuePushModalComponent, { width: '550px' });
        let component = <QueuePushModalComponent>dialogRef.componentInstance;
        component.message!.queue = this.queueName!;
        component.onconfirmed
            .pipe(take(1))
            .subscribe(msg => {
                if (msg)
                    this.queueService
                        .push(msg)
                        .subscribe(result => { });
            });
    }

    read(): void {
        this.queueService
            .read(this.queueName!)
            .subscribe(r => this.showQueueMessage(r.body!));
    }

    consume(): void {
        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'Your message will be <b class="imp">consumed.</b> You will see the message after you confirmed this. But queue consumers will not receive that message and it will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.queueService
                        .consume(this.queueName!)
                        .subscribe(r => this.showQueueMessage(r.body!));
            });
    }

    private showQueueMessage(message: QueueMessage): void {

        if (message == null) {
            alert('There is no message in the queue');
            return;
        }

        let dialogRef = this.dialog.open(QueueMessageModalComponent, { width: '920px' });
        let component = <QueueMessageModalComponent>dialogRef.componentInstance;
        try {
            message.messageObj = JSON.parse(message.message);
        }
        catch { }
        component.message = message;
    }

    clear(): void {

        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'All messages in queue will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.queueService.clear(this.queueName!)
                        .subscribe(r => this.load());
            });
    }

    move(): void {
        let dialogRef = this.dialog.open(MesssageMoveModalComponent, { width: '600px' });
        let component = <MesssageMoveModalComponent>dialogRef.componentInstance;
        component.messageCount = 321;
        component.onconfirmed
            .pipe(take(1))
            .subscribe((result: MoveCopyResult | null) => {
                if (result == null || result.target == null || result.target.length < 1)
                    return;

                if (result.moving) {
                    this.queueService.move(this.queueName!, result.target).subscribe(r => this.load());
                }
                else {
                    this.queueService.copy(this.queueName!, result.target).subscribe(r => {
                        this.router.navigateByUrl('/queue/' + result.target);
                    });
                }
            });
    }

    remove(): void {

        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'You are about to delete your queue. The queue and all messages in it will be deleted <b class="imp">permanently.</b>';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {

                if (value)
                    this.queueService.delete(this.queueName!)
                        .subscribe(r => {
                            this.router.navigateByUrl('/queues');
                        });

            });
    }

    setStatus(status: string): void {

        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'You are about to change your queue status to <b class="imp">' + status + '.</b> That operation might affect your producers and consumers.';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.queueService.status(this.queueName!, status)
                        .subscribe(r => this.load());
            });
    }

    changeOption(title: string, name: string, value: any): void {

        let dialogRef = this.dialog.open(QueueOptionModalComponent, { width: '500px' });
        let component = <QueueOptionModalComponent>dialogRef.componentInstance;

        component.model.title = title;
        component.model.property = name;
        component.model.value = value;

        component.onconfirmed
            .pipe(take(1))
            .subscribe(value => {
                if (value.confirmed) {
                    this.queueService.setOption(this.queueName!, value.property, value.value).subscribe(() => this.load());
                }
            });
    }

    resetStats(): void {
        let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '450px' });
        let component = <ConfirmModalComponent>dialogRef.componentInstance;
        component.message = 'Queue statistics will be reset. Are you sure?';
        component.onclosed
            .pipe(take(1))
            .subscribe(value => {
                if (value) {
                    this.queueService
                        .resetStats(this.queue!.info.name)
                        .subscribe(() => {
                            this.load();
                        });
                }
            });
    }
}
