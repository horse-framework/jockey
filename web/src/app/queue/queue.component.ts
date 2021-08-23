import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js';
import { interval } from 'rxjs';
import { BaseComponent } from 'src/lib/base-component';
import { SocketModels } from 'src/lib/socket-models';
import { HorseQueue } from 'src/models/horse-queue';
import { QueueGraphService } from 'src/services/queue-graph.service';
import { QueueService } from 'src/services/queue.service';
import { WebsocketService } from 'src/services/websocket.service';

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
        private activatedRoute: ActivatedRoute,
        private queueGraphService: QueueGraphService,
        private socket: WebsocketService,
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

        this.deliveryChart = new Chart(document.getElementById('queue-delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels,
                    datasets: [
                        {
                            label: 'Received',
                            borderColor: '#444',
                            data: this.queue.graph.map(x => x.received),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Delivered',
                            borderColor: '#1070af',
                            data: this.queue.graph.map(x => x.delivery),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Ack',
                            borderColor: '#10b02a',
                            data: this.queue.graph.map(x => x.ack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Neg. Ack',
                            borderColor: '#a020c0',
                            data: this.queue.graph.map(x => x.nack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Unack',
                            borderColor: '#999',
                            data: this.queue.graph.map(x => x.unack),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Error',
                            borderColor: '#ff0000',
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

        this.storeChart = new Chart(document.getElementById('queue-store-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels,
                    datasets: [
                        {
                            label: 'Msgs',
                            borderColor: '#104090',
                            data: this.queue.graph.map(x => x.stored),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'High Prio Msgs',
                            borderColor: '#f07000',
                            data: this.queue.graph.map(x => x.storedPrio),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Pending for Ack',
                            borderColor: '#aa2080',
                            data: this.queue.graph.map(x => x.pending),
                            fill: false,
                            pointRadius: 1,
                            pointHitRadius: 8,
                            lineTension: 0.2,
                            borderWidth: 2
                        },
                        {
                            label: 'Timeout',
                            borderColor: '#cc3333',
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

}
