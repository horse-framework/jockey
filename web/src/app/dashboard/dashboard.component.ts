import Chart from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { GraphService } from 'src/services/graph.service';
import { DashboardService } from 'src/services/dashboard.service';
import { Dashboard } from 'src/models/dashboard';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {

    deliveryChart = null;
    msgChart = null;
    dashboard: Dashboard;

    constructor(private graphService: GraphService,
        private dashboardService: DashboardService) {
        super();
    }

    async ngOnInit() {

        this.dashboardService.load().then(d => this.dashboard = d);
        await this.loadCharts();
    }

    private async loadCharts(): Promise<any> {

        let content = await this.graphService.load();

        this.deliveryChart = new Chart(document.getElementById('delivery-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

                    labels: content.labels,
                    datasets: [
                        {
                            label: 'Received',
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
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true }]
                    }
                }
            });

        this.msgChart = new Chart(document.getElementById('store-chart'),
            {
                type: 'line',
                hover: { mode: 'nearest', intersect: true },
                data: {

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
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{ display: false }],
                        yAxes: [{ display: true }]
                    }
                }
            });
    }

}
