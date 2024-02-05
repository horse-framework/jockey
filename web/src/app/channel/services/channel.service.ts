import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { WebsocketService } from '../../../services/websocket.service';
import { ApiResponse, IResponse } from 'src/models/api-response';
import { HorseMessage } from 'src/models/horse-message';
import { of } from 'rxjs';
import { MessageCount } from 'src/models/message-count';
import { DateHelper } from 'src/lib/date-helper';
import { ChannelForm } from '../models/channel-form';
import { ChannelInfo } from '../models/channel-info';
import { HorseChannel } from '../models/horse-channel';

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

  get(name: string): Promise<HorseChannel> {

    return this.api.get('/channel/get?name=' + name)
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

  remove(name: string): Promise<IResponse> {
    return this.api.delete('/channel/delete?name=' + name)
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

  getGraph(name: string): Promise<MessageCount> {

    let url = '/channel/graph';
    if (name != null && name.length > 0) {
      url += '&name=' + name;
    }

    return of(this)
      .pipe(
        mergeMap(() => this.api.get(url)),
        map(response => {

          if (!response.success)
            return null;

          let result = <MessageCount>response.data;
          result.labels = DateHelper.createLabels(result.d.map(x => x.u));

          return result;
        })
      )
      .toPromise();
  }

  setOption(channelName: string, optionName: string, value: any): Promise<any> {

    let model = {
      target: channelName,
      name: optionName,
      value: value
    };

    return this.api.put('/channel/option', model)
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
