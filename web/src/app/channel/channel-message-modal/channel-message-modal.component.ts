import { Component } from '@angular/core';
import { HorseMessage } from 'src/models/horse-message';
import { ChannelService } from '../services/channel.service';

@Component({
    selector: 'app-channel-message-modal',
    templateUrl: './channel-message-modal.component.html',
    styleUrls: ['./channel-message-modal.component.css'],
    standalone: false
})
export class ChannelMessageModalComponent {

  message: HorseMessage;
  isJson: boolean = false;

  constructor(private service: ChannelService) { }

  load(channelName: string): void {
    this.service.getInitialMessage(channelName)
      .then(msg => {
        this.message = msg;
        try {
          this.message.contentObj = JSON.parse(this.message.content);
        }
        catch { }
      });
  }

  setJson(value: boolean) {
    this.isJson = value;
  }
}
