import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { ChannelInfo } from 'src/models/channel-info';
import { WebsocketService } from './websocket.service';

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
}
