import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Chart from 'chart.js';
import { interval } from 'rxjs';
import { BaseComponent } from 'src/lib/base-component';
import { SocketModels } from 'src/lib/socket-models';
import { HorseQueue } from 'src/models/horse-queue';
import { QueueGraphService } from 'src/services/queue-graph.service';
import { QueueService } from 'src/services/queue.service';
import { WebsocketService } from 'src/services/websocket.service';
import { ConfirmModalComponent } from '../layout/portal-layout/confirm-modal/confirm-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { MesssageMoveModalComponent } from './messsage-move-modal/messsage-move-modal.component';
import { QueueMessageModalComponent } from './queue-message-modal/queue-message-modal.component';
import { QueueMessage } from 'src/models/queue-message';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
})
export class QueueComponent extends BaseComponent implements OnInit, OnDestroy {

    queue: HorseQueue;
    deliveryChart: any;
    storeChart: any;
    queueName: string;

    constructor(
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private queueGraphService: QueueGraphService,
        private socket: WebsocketService,
        private router: Router,
        private queueService: QueueService) {
        super();
    }

    async ngOnInit() {

        this.queueName = this.activatedRoute.snapshot.params.name;
        if (this.queueName == null || this.queueName.length === 0) return;

        await this.load();

        const request = {
            requestId: new Date().getTime().toString(),
            name: this.queue.info.name
        };

        this.socket.send(SocketModels.QueueDetailRequest, request);

        this.on(interval(5000)).subscribe(() => this.load());
    }



    private async load() {

        this.queue = await this.queueService.get(this.queueName);
        const labels = this.queueGraphService.createLabels(this.queue.graph);

        if (this.deliveryChart)
            this.deliveryChart.destroy();

        this.deliveryChart = new Chart(document.getElementById('queue-delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels,
                    datasets: [
                        {
                            label: 'Produced',
                            borderColor: '#2070e0',
                            data: this.queue.graph.map(x => x.received),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Ack',
                            borderColor: '#12bf4a',
                            data: this.queue.graph.map(x => x.ack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Neg. Ack',
                            borderColor: '#c042ef',
                            data: this.queue.graph.map(x => x.nack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Unack',
                            borderColor: '#eec236',
                            data: this.queue.graph.map(x => x.unack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Error',
                            borderColor: '#ff3333',
                            data: this.queue.graph.map(x => x.error),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        }]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true, ticks: { precision: 0 } }]
                    }
                }
            });

        if (this.storeChart)
            this.storeChart.destroy();

        this.storeChart = new Chart(document.getElementById('queue-store-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels,
                    datasets: [
                        {
                            label: 'Msgs',
                            borderColor: '#2070e0',
                            data: this.queue.graph.map(x => x.stored),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'High Prio Msgs',
                            borderColor: '#ff9911',
                            data: this.queue.graph.map(x => x.storedPrio),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Pending for Ack',
                            borderColor: '#10a0a0',
                            data: this.queue.graph.map(x => x.pending),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Timeout',
                            borderColor: '#f02020',
                            data: this.queue.graph.map(x => x.timeout),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        }]
                },
                options: {
                    animation: {
                        duration: 0
                    },
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true, ticks: { precision: 0 } }]
                    }
                }
            });
    }

    ngOnDestroy(): void {

        super.ngOnDestroy();

        const request = {
            requestId: new Date().getTime().toString(),
            name: null
        };

        this.socket.send(SocketModels.QueueDetailRequest, request);
    }


    read(): void {
        this.queueService
            .read(this.queueName)
            .then(msg => this.showQueueMessage(msg));
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
                        .consume(this.queueName)
                        .then(msg => this.showQueueMessage(msg));
            });
    }

    private showQueueMessage(message: QueueMessage): void {

        if (message == null) {
            alert('There is no message in the queue');
            return;
        }

        let dialogRef = this.dialog.open(QueueMessageModalComponent, { width: '900px' });
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
                    this.queueService.clear(this.queueName)
                        .then(r => this.load());
            });
    }

    move(): void {
        let dialogRef = this.dialog.open(MesssageMoveModalComponent, { width: '600px' });
        let component = <MesssageMoveModalComponent>dialogRef.componentInstance;
        component.messageCount = 321;
        component.onconfirmed
            .pipe(take(1))
            .subscribe(target => {
                if (target == null || target.length < 1)
                    return;

                target = target.trim();

                this.queueService.move(this.queueName, target)
                    .then(r => this.load());
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
                    this.queueService.delete(this.queueName)
                        .then(r => {
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
                    this.queueService.status(this.queueName, status)
                        .then(r => this.load());
            });
    }

}
