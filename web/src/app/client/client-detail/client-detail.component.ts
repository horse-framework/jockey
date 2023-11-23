import Chart from 'chart.js';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/lib/base-component';
import { ClientService } from 'src/services/client.service';
import { WebsocketService } from 'src/services/websocket.service';
import { HorseClientDetail } from '../models/horse-client-detail';
import { SocketModels } from 'src/lib/socket-models';
import { filter, map } from 'rxjs/operators';
import { ChartService } from 'src/services/chart.service';
import { MessageCount } from 'src/models/message-count';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent extends BaseComponent implements OnInit, OnDestroy {

  id: string;
  client: HorseClientDetail;
  clientChart: any;

  constructor(private activatedRoute: ActivatedRoute,
    private socket: WebsocketService,
    private chartService: ChartService,
    private service: ClientService) {
    super();
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    await this.load();
    this.subscribeWebsockets()
  }

  private async load() {
    this.client = await this.service.get(this.id);
    let count = await this.service.getGraph(this.id, '1m')

    if (this.clientChart)
      this.clientChart.destroy();

    this.clientChart = new Chart(document.getElementById('messages-chart'),
      {
        type: 'line',
        hover: { mode: 'nearest', intersect: true },
        data: {
          labels: count.labels,
          datasets: [
            {
              label: 'Direct Sent',
              borderColor: '#2070e0',
              data: count.d.map(x => x.s),
              fill: false,
              pointRadius: 1,
              pointHitRadius: 8,
              lineTension: 0.2,
              borderWidth: 2
            },
            {
              label: 'Direct Received',
              borderColor: '#f0f010',
              data: count.d.map(x => x.r),
              fill: false,
              pointRadius: 1,
              pointHitRadius: 8,
              lineTension: 0.2,
              borderWidth: 2
            },
            {
              label: 'Direct Respond',
              borderColor: '#10cf70',
              data: count.d.map(x => x.rs),
              fill: false,
              pointRadius: 1,
              pointHitRadius: 8,
              lineTension: 0.2,
              borderWidth: 2
            },
            {
              label: 'Direct No Receiver',
              borderColor: '#9a2ef0',
              data: count.d.map(x => x.nr),
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

  override  ngOnDestroy(): void {
    super.ngOnDestroy();
    this.socket.unsubscribe('client:' + this.id);
  }

  private subscribeWebsockets(): void {

    this.on(this.socket.onmessage)
      .pipe(
        filter(x => x.type == SocketModels.DirectGraph && x.payload.n == this.id),
        filter(() => this.clientChart != null),
        map(x => x.payload)
      )
      .subscribe((model: MessageCount) => this.chartService.updateChart(this.clientChart, model));

    this.socket.subscribe('client:' + this.id, '1m');
  }

}
