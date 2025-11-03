import { Chart } from 'chart.js/auto';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HorseClientDetail } from '../models/horse-client-detail';
import { filter, map } from 'rxjs/operators';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { WebsocketService } from '../../../services/websocket.service';
import { ChartService } from '../../../services/chart.service';
import { ClientService } from '../../../services/client.service';
import { MessageCount } from '../../../models/message-count';
import { SocketModels } from '../../../lib/websockets/socket-models';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
  standalone: false
})
export class ClientDetailComponent extends BaseFormComponent implements OnInit, OnDestroy {

  id: string | null = null;
  client: HorseClientDetail | null = null;
  clientChart: any;

  constructor(private activatedRoute: ActivatedRoute,
    private socket: WebsocketService,
    private chartService: ChartService,
    private service: ClientService) {
    super();
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    await this.load();
    this.subscribeWebsockets()
  }

  private load() {

    this.service.get(this.id!).subscribe(response => {
      this.client = response.body!;
      this.service.getGraph(this.id!).subscribe(c => {

        if (this.clientChart)
          this.clientChart.destroy();

        let count = c!;

        this.clientChart = new Chart(<any>document.getElementById('messages-chart'),
          {
            type: 'line',
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
                  tension: 0.2,
                  borderWidth: 2
                },
                {
                  label: 'Direct Received',
                  borderColor: '#f0f010',
                  data: count.d.map(x => x.r),
                  fill: false,
                  pointRadius: 1,
                  pointHitRadius: 8,
                  tension: 0.2,
                  borderWidth: 2
                },
                {
                  label: 'Direct Respond',
                  borderColor: '#10cf70',
                  data: count.d.map(x => x.rs),
                  fill: false,
                  pointRadius: 1,
                  pointHitRadius: 8,
                  tension: 0.2,
                  borderWidth: 2
                },
                {
                  label: 'Direct No Receiver',
                  borderColor: '#9a2ef0',
                  data: count.d.map(x => x.nr),
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

    this.socket.subscribe('client:' + this.id);
  }

}
