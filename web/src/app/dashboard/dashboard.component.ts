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
    routerChart = null;
    channelChart = null;
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
        this.dashboard = await this.dashboardService.load();
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

        if (this.deliveryChart)
            this.deliveryChart.destroy();

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

        if (this.storeChart)
            this.storeChart.destroy();

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

        if (this.msgChart)
            this.msgChart.destroy();

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

        if (this.routerChart)
            this.routerChart.destroy();

        this.routerChart = new Chart(document.getElementById('router-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getRouterChartData(messageContent),
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

        if (this.channelChart)
            this.channelChart.destroy();

        this.channelChart = new Chart(document.getElementById('channel-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getChannelChartData(messageContent),
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
                    borderColor: '#2070e0',
                    data: content.data.map(x => x.received),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Ack',
                    borderColor: '#12bf4a',
                    data: content.data.map(x => x.ack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Neg. Ack',
                    borderColor: '#c042ef',
                    data: content.data.map(x => x.nack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Unack',
                    borderColor: '#eec236',
                    data: content.data.map(x => x.unack),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Pending Ack',
                    borderColor: '#df3faf',
                    data: content.data.map(x => x.pending),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Error',
                    borderColor: '#ff3333',
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
                    borderColor: '#2070e0',
                    data: content.data.map(x => x.stored),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'High Prio Msgs',
                    borderColor: '#ff9911',
                    data: content.data.map(x => x.storedPrio),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Timeout',
                    borderColor: '#ff4444',
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
                    borderColor: '#2070e0',
                    data: content.data.map(x => x.directMessage),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Response',
                    borderColor: '#f0f010',
                    data: content.data.map(x => x.directResponse),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Delivery',
                    borderColor: '#10cf70',
                    data: content.data.map(x => x.directDelivery),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct No Receiver',
                    borderColor: '#9a2ef0',
                    data: content.data.map(x => x.directNoReceiver),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getRouterChartData(content: GraphContent<MessageGraphData>) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Router Publish',
                    borderColor: '#2070e0',
                    data: content.data.map(x => x.routerPublish),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Received',
                    borderColor: '#10c070',
                    data: content.data.map(x => x.routerOk),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router No Receiver',
                    borderColor: '#f06010',
                    data: content.data.map(x => x.routerFailed),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getChannelChartData(content: GraphContent<MessageGraphData>) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Published',
                    borderColor: '#2070e0',
                    data: content.data.map(x => x.channelPublish),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Received',
                    borderColor: '#10c070',
                    data: content.data.map(x => x.channelReceive),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

}
