import { Chart } from 'chart.js/auto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '../../../src/services/dashboard.service';
import { Dashboard } from '../../../src/models/dashboard';
import { forkJoin, interval } from 'rxjs';
import { TimespanPipe } from '../layout/pipes/timespan.pipe';
import { CountRecord, MessageCount } from '../../../src/models/message-count';
import { WebsocketService } from '../../../src/services/websocket.service';
import { filter, map } from 'rxjs/operators';
import { ChartService } from '../../../src/services/chart.service';
import { QueueService } from '../queue/services/queue.service';
import { HorseRouterService } from '../../../src/services/horse-router.service';
import { ClientService } from '../../../src/services/client.service';
import { ChannelService } from '../channel/services/channel.service';
import { BaseFormComponent } from '../../lib/base-form.component';
import { SessionStore } from '../stores/session-store';
import { SocketModels } from '../../lib/websockets/socket-models';
import { DateHelper } from '../../lib/helpers/date.helper';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent extends BaseFormComponent implements OnInit, OnDestroy {

    deliveryChart: any = null;
    msgChart: any = null;
    storeChart: any = null;
    routerChart: any = null;
    channelChart: any = null;
    dashboard: Dashboard | null = null;
    lifetime: string = '';

    constructor(private dashboardService: DashboardService,
        private socket: WebsocketService,
        private chartService: ChartService,
        private queueService: QueueService,
        private session: SessionStore,
        private routerService: HorseRouterService,
        private channelService: ChannelService,
        private clientService: ClientService) {
        super();
    }

    async ngOnInit() {

        await this.load();
        this.on(interval(5000)).subscribe(async () => {
            this.dashboardService.load().subscribe(r => {
                this.dashboard = r.body!;
            });
        });

        let user = this.session.state();
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

        this.socket.subscribe('dashboard');
    }

    private async load() {

        this.dashboardService.load().subscribe(r => this.dashboard = r.body!);
        this.loadCharts();

        let pipe = new TimespanPipe();
        this.on(interval(1000)).subscribe(() => {
            if (!this.dashboard)
                return;

            let now = new Date().getTime() / 1000;
            this.lifetime = pipe.transform(now, this.dashboard.server.startedDate);
        });
    }

    private loadCharts() {
        forkJoin({
            queue: this.queueService.getGraph(''),
            channel: this.channelService.getGraph(''),
            router: this.routerService.getGraph(''),
            client: this.clientService.getGraph('')
        }).subscribe(result => {

            if (this.deliveryChart)
                this.deliveryChart.destroy();

            this.deliveryChart = new Chart(<any>document.getElementById('delivery-chart'),
                {
                    type: 'line',
                    data: this.getDeliveryChartData(result.queue!.body!.stream!),
                    options: {
                        animation: { duration: 0 },
                        hover: { mode: 'nearest', intersect: true },
                        responsive: true,
                        scales: {
                            x: { display: false },
                            y: { display: true, ticks: { precision: 0 } }
                        }
                    }
                });

            if (this.storeChart)
                this.storeChart.destroy();

            this.storeChart = new Chart(<any>document.getElementById('store-chart'),
                {
                    type: 'line',
                    data: this.getStoreChartData(result.queue!.body!.store!),
                    options: {
                        animation: { duration: 0 },
                        hover: { mode: 'nearest', intersect: true },
                        responsive: true,
                        scales: {
                            x: { display: false },
                            y: { display: true, ticks: { precision: 0 } }
                        }
                    }
                });

            if (this.msgChart)
                this.msgChart.destroy();

            this.msgChart = new Chart(<any>document.getElementById('msg-chart'),
                {
                    type: 'line',
                    data: this.getMessageChartData(result.client?.d!),
                    options: {
                        animation: { duration: 0 },
                        hover: { mode: 'nearest', intersect: true },
                        responsive: true,
                        scales: {
                            x: { display: false },
                            y: { display: true, ticks: { precision: 0 } }
                        }
                    }
                });

            if (this.routerChart)
                this.routerChart.destroy();

            this.routerChart = new Chart(<any>document.getElementById('router-chart'),
                {
                    type: 'line',
                    data: this.getRouterChartData(result.router!.d),
                    options: {
                        animation: { duration: 0 },
                        hover: { mode: 'nearest', intersect: true },
                        responsive: true,
                        scales: {
                            x: { display: false },
                            y: { display: true, ticks: { precision: 0 } }
                        }
                    }
                });

            if (this.channelChart)
                this.channelChart.destroy();

            this.channelChart = new Chart(<any>document.getElementById('channel-chart'),
                {
                    type: 'line',
                    data: this.getChannelChartData(result.channel!.d),
                    options: {
                        animation: { duration: 0 },
                        hover: { mode: 'nearest', intersect: true },
                        responsive: true,
                        scales: {
                            x: { display: false },
                            y: { display: true, ticks: { precision: 0 } }
                        }
                    }
                });

        });
    }

    private getDeliveryChartData(counts: CountRecord[]) {
        return {
            labels: this.createLabels(counts),
            datasets: [
                {
                    label: 'Produced',
                    borderColor: '#2070e0',
                    data: counts.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Ack',
                    borderColor: '#12bf4a',
                    data: counts.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Neg. Ack',
                    borderColor: '#c042ef',
                    data: counts.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Unack',
                    borderColor: '#eec236',
                    data: counts.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Error',
                    borderColor: '#ff3333',
                    data: counts.map(x => x.e),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };

    }

    private getStoreChartData(counts: CountRecord[]) {
        return {
            labels: this.createLabels(counts),
            datasets: [
                {
                    label: 'Msgs',
                    borderColor: '#2070e0',
                    data: counts.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'High Prio Msgs',
                    borderColor: '#ff9911',
                    data: counts.map(x => x.d),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Pending for Ack',
                    borderColor: '#10a0a0',
                    data: counts.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Processing',
                    borderColor: '#f02020',
                    data: counts.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        }
    }

    private getMessageChartData(counts: CountRecord[]) {
        return {
            labels: this.createLabels(counts),
            datasets: [
                {
                    label: 'Direct Sent',
                    borderColor: '#2070e0',
                    data: counts.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Received',
                    borderColor: '#f0f010',
                    data: counts.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct Respond',
                    borderColor: '#10cf70',
                    data: counts.map(x => x.rs),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Direct No Receiver',
                    borderColor: '#9a2ef0',
                    data: counts.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getRouterChartData(counts: CountRecord[]) {
        return {
            labels: this.createLabels(counts),
            datasets: [
                {
                    label: 'Router Publish',
                    borderColor: '#2070e0',
                    data: counts.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router Received',
                    borderColor: '#10c070',
                    data: counts.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Router No Receiver',
                    borderColor: '#f06010',
                    data: counts.map(x => x.nr),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    private getChannelChartData(counts: CountRecord[]) {
        return {
            labels: this.createLabels(counts),
            datasets: [
                {
                    label: 'Published',
                    borderColor: '#2070e0',
                    data: counts.map(x => x.s),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                },
                {
                    label: 'Received',
                    borderColor: '#10c070',
                    data: counts.map(x => x.r),
                    fill: false,
                    pointRadius: 1,
                    pointHitRadius: 8,
                    lineTension: 0.2,
                    borderWidth: 2
                }]
        };
    }

    createLabels(data: CountRecord[]): string[] {
        let labels = [];
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            labels.push(DateHelper.findTimeFromUnixSeconds(item.u));
        }
        return labels;
    }
}
