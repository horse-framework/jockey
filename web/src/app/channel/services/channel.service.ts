import { inject, Injectable } from '@angular/core';
import { map, mergeMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ChannelForm } from '../models/channel-form';
import { ChannelInfo } from '../models/channel-info';
import { HorseChannel } from '../models/horse-channel';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HorseMessage } from '../../../models/horse-message';
import { MessageCount } from '../../../models/message-count';
import { DateHelper } from '../../../lib/helpers/date.helper';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  readonly #http: HttpClient = inject(HttpClient);

  list(): Observable<HttpResponse<ChannelInfo[]>> {
    return this.#http.get<ChannelInfo[]>('/channel/list', { observe: 'response' });
  }

  get(name: string): Observable<HttpResponse<HorseChannel>> {
    return this.#http.get<HorseChannel>('/channel/get?name=' + name, { observe: 'response' });
  }

  create(form: ChannelForm): Observable<HttpResponse<any>> {
    return this.#http.post('/channel/create', form, { observe: 'response' });
  }

  remove(name: string): Observable<HttpResponse<any>> {
    return this.#http.delete('/channel/delete?name=' + name, { observe: 'response' });
  }

  getInitialMessage(channelName: string): Observable<HttpResponse<HorseMessage>> {
    return this.#http.get<HorseMessage>('/channel/initial-message?name=' + channelName, { observe: 'response' });
  }

  getGraph(name: string): Observable<MessageCount | null> {

    let url = '/channel/graph';
    if (name != null && name.length > 0) {
      url += '&name=' + name;
    }

    return of(this)
      .pipe(
        take(1),
        mergeMap(() => this.#http.get<MessageCount>(url, { observe: 'response' })),
        map(response => {

          if (!response.ok || !response.body)
            return null;

          let result = response.body;
          result.labels = DateHelper.createLabels(result.d.map(x => x.u));

          return result;
        })
      );
  }

  setOption(channelName: string, optionName: string, value: any): Observable<HttpResponse<any>> {

    let model = {
      target: channelName,
      name: optionName,
      value: value
    };

    return this.#http.put('/channel/option', model, { observe: 'response' });
  }
}
