import Chart from 'chart.js';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { DashboardService } from 'src/services/dashboard.service';
import { Dashboard } from 'src/models/dashboard';
import { interval } from 'rxjs';
import { TimespanPipe } from '../layout/pipes/timespan.pipe';
import { MessageCount } from 'src/models/message-count';
import { WebsocketService } from 'src/services/websocket.service';
import { SocketModels } from 'src/lib/socket-models';
import { filter, map } from 'rxjs/operators';
import { ChartService } from 'src/services/chart.service';
import { QueueService } from '../queue/services/queue.service';
import { HorseRouterService } from 'src/services/horse-router.service';
import { ClientService } from 'src/services/client.service';
import { ChannelService } from '../channel/services/channel.service';
import { SessionService } from 'src/services/session.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit, OnDestroy {

    deliveryChart = null;
    msgChart = null;
    storeChart = null;
    routerChart = null;
    channelChart = null;
    dashboard: Dashboard;
    lifetime: string;

    constructor(private dashboardService: DashboardService,
        private socket: WebsocketService,
        private chartService: ChartService,
        private queueService: QueueService,
        private session: SessionService,
        private routerService: HorseRouterService,
        private channelService: ChannelService,
        private clientService: ClientService) {
        super();
    }

    async ngOnInit() {
        await this.load();
        this.on(interval(5000)).subscribe(async () => {
            this.dashboardService.load().then(d => {
                this.dashboard = d;
            });
        });

        let user = this.session.get();
        if (user && !this.socket.isConnected()) {
            this.socket.connect(user.token);
            this.on(this.socket.onconnected).subscribe(() => this.subscribeWebsockets());
        }
        else {
            this.subscribeWebsockets();
        }
    }

    override ngOnDestroy(): void {
        super.ngOnDestroy();
        this.socket.unsubscribe('dashboard');
    }

    private subscribeWebsockets(): void {

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.QueueGraph && x.payload.n == '*'),
                filter(() => this.deliveryChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.deliveryChart, model));

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.QueueStoreGraph && x.payload.n == '*'),
                filter(() => this.storeChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.storeChart, model));

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.DirectGraph && x.payload.n == '*'),
                filter(() => this.msgChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.msgChart, model));

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.RouterGraph && x.payload.n == '*'),
                filter(() => this.routerChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.routerChart, model));

        this.on(this.socket.onmessage)
            .pipe(
                filter(x => x.type == SocketModels.ChannelGraph && x.payload.n == '*'),
                filter(() => this.channelChart != null),
                map(x => x.payload)
            )
            .subscribe((model: MessageCount) => this.chartService.updateChart(this.channelChart, model));

        this.socket.subscribe('dashboard', '1m');
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

        let queue = await this.queueService.getGraph(null, '1m');
        let channel = await this.channelService.getGraph(null, '1m');
        let router = await this.routerService.getGraph(null, '1m');
        let client = await this.clientService.getGraph(null, '1m');

        if (this.deliveryChart)
            this.deliveryChart.destroy();

        this.deliveryChart = new Chart(document.getElementById('delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: this.getDeliveryChartData(queue.stream),
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
                data: this.getStoreChartData(queue.store),
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
                data: this.getMessageChartData(client),
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
                data: this.getRouterChartData(router),
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
                data: this.getChannelChartData(channel),
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

    private getDeliveryChartData(content: MessageCount) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Produced',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Ack',
                    borderColor: '#12bf4a',
                    data: content.d.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Neg. Ack',
                    borderColor: '#c042ef',
                    data: content.d.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Unack',
                    borderColor: '#eec236',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Error',
                    borderColor: '#ff3333',
                    data: content.d.map(x => x.e),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };

    }

    private getStoreChartData(content: MessageCount) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Msgs',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'High Prio Msgs',
                    borderColor: '#ff9911',
                    data: content.d.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Pending for Ack',
                    borderColor: '#10a0a0',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Processing',
                    borderColor: '#f02020',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        }
    }

    private getMessageChartData(content: MessageCount) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Direct Sent',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Received',
                    borderColor: '#f0f010',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Respond',
                    borderColor: '#10cf70',
                    data: content.d.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct No Receiver',
                    borderColor: '#9a2ef0',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getRouterChartData(content: MessageCount) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Router Publish',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Received',
                    borderColor: '#10c070',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router No Receiver',
                    borderColor: '#f06010',
                    data: content.d.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getChannelChartData(content: MessageCount) {
        return {
            labels: content.labels,
            datasets: [
                {
                    label: 'Published',
                    borderColor: '#2070e0',
                    data: content.d.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Received',
                    borderColor: '#10c070',
                    data: content.d.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

}
