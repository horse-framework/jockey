import { Component, OnInit } from '@angular/core';
import { ChannelCreateModalComponent } from './channel-create-modal/channel-create-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ChannelMessageModalComponent } from '../channel-message-modal/channel-message-modal.component';
import { ChannelInfo } from '../models/channel-info';
import { ChannelService } from '../services/channel.service';
import { BaseFormComponent } from '../../../lib/base-form.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
  standalone: false
})
export class ChannelsComponent extends BaseFormComponent implements OnInit {

  channels: ChannelInfo[] = [];

  constructor(private dialog: MatDialog, private channelService: ChannelService) {
    super();
  }

  async ngOnInit() {
    this.channelService.list().subscribe(r => this.channels = r.body!);
    this.subscribeToListRefresh().subscribe(() => this.channelService.list().subscribe(r => this.channels = r.body!));
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
            .subscribe(msg => {
              this.ngOnInit();
            });
      });
  }

  viewInitialMessage(channel: ChannelInfo): void {
    let dialogRef = this.dialog.open(ChannelMessageModalComponent, { panelClass: 'wide-modal' });
    let component = <ChannelMessageModalComponent>dialogRef.componentInstance;
    component.load(channel.name);
  }

}
