import Chart from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/lib/base-component';
import { HorseQueue } from 'src/models/horse-queue';
import { QueueService } from 'src/services/queue.service';
import { QueueGraphService } from 'src/services/queue-graph.service';

@Component({
    selector: 'app-queue',
    templateUrl: './queue.component.html',
    styleUrls: ['./queue.component.css']
})
export class QueueComponent extends BaseComponent implements OnInit {

    queue: HorseQueue;
    deliveryChart: any;
    storeChart: any;

    constructor(private activatedRoute: ActivatedRoute,
        private queueGraphService: QueueGraphService,
        private queueService: QueueService) {
        super();
    }

    async ngOnInit() {

        let queueName = this.activatedRoute.snapshot.params.name;
        if (queueName == null || queueName.length == 0) {
            return;
        }

        this.queue = await this.queueService.get(queueName);
        let labels = this.queueGraphService.createLabels(this.queue.graph);

        this.deliveryChart = new Chart(document.getElementById('queue-delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels: labels,
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

                    labels: labels,
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
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true, ticks: { precision: 0 } }]
                    }
                }
            });

    }
}
