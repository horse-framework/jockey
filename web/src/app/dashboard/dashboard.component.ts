import Chart from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { QueueGraphService } from 'src/services/queue-graph.service';
import { DashboardService } from 'src/services/dashboard.service';
import { Dashboard } from 'src/models/dashboard';
import { interval } from 'rxjs';
import { TimespanPipe } from '../layout/pipes/timespan.pipe';
import { MessageGraphService } from 'src/services/message-graph.service';
import { GraphContent } from 'src/models/graph-content';
import { QueueGraphData } from 'src/models/queue-graph-data';
import { MessageGraphData } from 'src/models/message-graph-data';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

    deliveryChart = null;
    msgChart = null;
    storeChart = null;
    dashboard: Dashboard;
    lifetime: string;

    constructor(private queueGraphService: QueueGraphService,
        private messageGraphService: MessageGraphService,
        private dashboardService: DashboardService) {
        super();
    }

    async ngOnInit() {

        await this.load();

        this.on(interval(5000)).subscribe(async () => {
            this.dashboardService.load().then(d => this.dashboard = d);
            await this.loadCharts();
        });
    }

    private async load() {
        this.dashboardService.load().then(d => this.dashboard = d);
        await this.loadCharts();

        let pipe = new TimespanPipe();
        this.on(interval(1000)).subscribe(() => {
            if (!this.dashboard)
                return;

            let now = new Date().getTime() / 1000;
            this.lifetime = pipe.transform(now, this.dashboard.server.startedDate);
        });
    }

    private async loadCharts(): Promise<any> {

        let content = await this.queueGraphService.load();
        let messageContent = await this.messageGraphService.load();

        this.deliveryChart = new Chart(document.getElementById('delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getDeliveryChartData(content),
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

        this.storeChart = new Chart(document.getElementById('store-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getStoreChartData(content),
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

        this.msgChart = new Chart(document.getElementById('msg-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getMessageChartData(messageContent),
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

    private getDeliveryChartData(content: GraphContent<QueueGraphData>) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Produced',
                    borderColor: '#444',
                    data: content.data.map(x => x.received),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Delivered',
                    borderColor: '#1070af',
                    data: content.data.map(x => x.delivery),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Ack',
                    borderColor: '#10b02a',
                    data: content.data.map(x => x.ack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Neg. Ack',
                    borderColor: '#a020c0',
                    data: content.data.map(x => x.nack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Unack',
                    borderColor: '#999',
                    data: content.data.map(x => x.unack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Error',
                    borderColor: '#ff0000',
                    data: content.data.map(x => x.error),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };

    }

    private getStoreChartData(content: GraphContent<QueueGraphData>) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Msgs',
                    borderColor: '#104090',
                    data: content.data.map(x => x.stored),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'High Prio Msgs',
                    borderColor: '#f07000',
                    data: content.data.map(x => x.storedPrio),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Pending for Ack',
                    borderColor: '#aa2080',
                    data: content.data.map(x => x.pending),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Timeout',
                    borderColor: '#cc3333',
                    data: content.data.map(x => x.timeout),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        }
    }

    private getMessageChartData(content: GraphContent<MessageGraphData>) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Direct Sent',
                    borderColor: '#1070c0',
                    data: content.data.map(x => x.directMessage),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Response',
                    borderColor: '#907010',
                    data: content.data.map(x => x.directResponse),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Delivery',
                    borderColor: '#10a050',
                    data: content.data.map(x => x.directDelivery),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct No Receiver',
                    borderColor: '#8010e0',
                    data: content.data.map(x => x.directNoReceiver),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Publish',
                    borderColor: '#606090',
                    data: content.data.map(x => x.routerPublish),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Received',
                    borderColor: '#20caca',
                    data: content.data.map(x => x.routerOk),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router No Receiver',
                    borderColor: '#e02255',
                    data: content.data.map(x => x.routerFailed),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }
}
