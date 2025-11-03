import { Chart } from 'chart.js';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../services/channel.service';
import { filter, map, take } from 'rxjs/operators';
import { ChannelOptionModalComponent } from './channel-option-modal/channel-option-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ChannelMessageModalComponent } from '../channel-message-modal/channel-message-modal.component';
import { HorseChannel } from '../models/horse-channel';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { WebsocketService } from '../../../services/websocket.service';
import { ChartService } from '../../../services/chart.service';
import { MessageCount } from '../../../models/message-count';
import { ConfirmModalComponent } from '../../layout/portal-layout/confirm-modal/confirm-modal.component';
import { SocketModels } from '../../../lib/websockets/socket-models';

@Component({
  selector: 'app-channel-detail',
  templateUrl: './channel-detail.component.html',
  styleUrls: ['./channel-detail.component.css'],
  standalone: false
})
export class ChannelDetailComponent extends BaseFormComponent implements OnInit, OnDestroy {

  channelName: string = '';
  channel: HorseChannel | null = null;
  channelChart: any;

  constructor(private activatedRoute: ActivatedRoute,
    private service: ChannelService,
    private socket: WebsocketService,
    private dialog: MatDialog,
    private router: Router,
    private chartService: ChartService) {
    super();
  }

  async ngOnInit() {
    this.channelName = this.activatedRoute.snapshot.params['name'];
    await this.load();
    this.subscribeWebsockets()
    this.subscribeToListRefresh().subscribe(() => this.service.get(this.channelName).subscribe(response => this.channel = response.body!));
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.socket.unsubscribe('channel:' + this.channelName);
  }

  private load() {

    this.service.get(this.channelName).subscribe(channelResponse => {
      this.channel = channelResponse.body!;
      this.service.getGraph(this.channelName).subscribe(count => {

        if (this.channelChart)
          this.channelChart.destroy();

        this.channelChart = new Chart(<any>document.getElementById('messages-chart'),
          {
            type: 'line',
            data: {
              labels: count!.labels,
              datasets: [
                {
                  label: 'Published',
                  borderColor: '#2070e0',
                  data: count!.d.map(x => x.s),
                  fill: false,
                  pointRadius: 1,
                  pointHitRadius: 8,
                  tension: 0.2,
                  borderWidth: 2
                },
                {
                  label: 'Received',
                  borderColor: '#10c070',
                  data: count!.d.map(x => x.r),
                  fill: false,
                  pointRadius: 1,
                  pointHitRadius: 8,
                  tension: 0.2,
                  borderWidth: 2
                }]
            },
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
    })

  }

  private subscribeWebsockets(): void {

    this.on(this.socket.onmessage)
      .pipe(
        filter(x => x.type == SocketModels.ChannelGraph && x.payload.n == this.channelName),
        filter(() => this.channelChart != null),
        map(x => x.payload)
      )
      .subscribe((model: MessageCount) => this.chartService.updateChart(this.channelChart, model));

    this.socket.subscribe('channel:' + this.channelName);
  }

  changeOption(title: string, name: string, value: any, type: string = 'text'): void {

    let dialogRef = this.dialog.open(ChannelOptionModalComponent, { width: '500px' });
    let component = <ChannelOptionModalComponent>dialogRef.componentInstance;

    component.model.title = title;
    component.model.property = name;
    component.model.value = value;
    component.model.type = type;

    component.onconfirmed
      .pipe(take(1))
      .subscribe(value => {
        if (value.confirmed) {
          this.service.setOption(this.channelName, value.property, value.value).subscribe(() => this.load());
        }
      });
  }

  remove(): void {
    let dialogRef = this.dialog.open(ConfirmModalComponent, { width: '600px' });
    let component = <ConfirmModalComponent>dialogRef.componentInstance;
    component.message = 'You are about to delete <b class="imp">' + this.channelName + '</b> Channel. Are you sure?';
    component.onclosed
      .pipe(take(1))
      .subscribe(value => {
        if (value)
          this.service.remove(this.channelName)
            .subscribe(r => {
              this.router.navigateByUrl('/channels');
            });
      });
  }

  viewInitialMessage(): void {
    let dialogRef = this.dialog.open(ChannelMessageModalComponent, { width: '800px' });
    let component = <ChannelMessageModalComponent>dialogRef.componentInstance;
    component.load(this.channelName);
  }
}
