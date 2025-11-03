import { Component } from '@angular/core';
import { ChannelService } from '../services/channel.service';
import { HorseMessage } from '../../../models/horse-message';

@Component({
    selector: 'app-channel-message-modal',
    templateUrl: './channel-message-modal.component.html',
    styleUrls: ['./channel-message-modal.component.css'],
    standalone: false
})
export class ChannelMessageModalComponent {

  message: HorseMessage | null = null;
  isJson: boolean = false;

  constructor(private service: ChannelService) { }

  load(channelName: string): void {
    this.service.getInitialMessage(channelName)
      .subscribe(response => {
        this.message = response.body!;
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
