import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { ChannelInfo } from 'src/models/channel-info';
import { ChannelService } from 'src/services/channel.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent extends BaseComponent implements OnInit {

  channels: ChannelInfo[];

  constructor(private channelService: ChannelService) {
    super();
  }

  async ngOnInit() {
    this.channels = await this.channelService.list();
  }

}
