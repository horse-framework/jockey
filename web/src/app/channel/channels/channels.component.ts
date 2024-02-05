import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { ChannelCreateModalComponent } from './channel-create-modal/channel-create-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ChannelMessageModalComponent } from '../channel-message-modal/channel-message-modal.component';
import { ChannelInfo } from '../models/channel-info';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent extends BaseComponent implements OnInit {

  channels: ChannelInfo[];

  constructor(private dialog: MatDialog, private channelService: ChannelService) {
    super();
  }

  async ngOnInit() {
    this.channels = await this.channelService.list();
    this.subscribeToListRefresh().subscribe(() => this.channelService.list().then(channels => this.channels = channels));
  }

  create(): void {

    let dialogRef = this.dialog.open(ChannelCreateModalComponent, { width: '400px' });
    let component = <ChannelCreateModalComponent>dialogRef.componentInstance;

    component.onconfirmed
      .pipe(take(1))
      .subscribe(value => {
        if (value)
          this.channelService
            .create(value)
            .then(msg => {
              this.ngOnInit();
            });
      });
  }

  viewInitialMessage(channel: ChannelInfo): void {

    let dialogRef = this.dialog.open(ChannelMessageModalComponent, { width: '800px' });
    let component = <ChannelMessageModalComponent>dialogRef.componentInstance;
    component.load(channel.name);
  }

}
