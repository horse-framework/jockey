import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { ChannelInfo } from 'src/models/channel-info';
import { WebsocketService } from './websocket.service';
import { ChannelForm } from 'src/models/channel-form';
import { ApiResponse } from 'src/models/api-response';
import { HorseMessage } from 'src/models/horse-message';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private api: ApiClient, private socket: WebsocketService) { }

  list(): Promise<ChannelInfo[]> {

    return this.api.get('/channel/list')
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  create(form: ChannelForm): Promise<ApiResponse> {
    return this.api.post('/channel/create', form)
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  getInitialMessage(channelName: string): Promise<HorseMessage> {

    return this.api.get('/channel/initial-message?name=' + channelName)
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }
}
