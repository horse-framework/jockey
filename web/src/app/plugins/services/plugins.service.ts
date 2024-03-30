import { Injectable } from '@angular/core';
import { ApiClient } from 'src/lib/api-client';
import { PluginAssembly } from '../models/plugin-assembly';
import { map } from 'rxjs/operators';
import { IResponse } from 'src/models/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  constructor(private api: ApiClient) { }

  async list(): Promise<PluginAssembly[]> {

    return this.api.get('/plugin/list')
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  load(file: File): Promise<IResponse> {
    let form = new FormData();
    form.append('file', file, file.name);
    return this.api.postForm('/plugin/load', form).toPromise();
  }

  async enable(name: string): Promise<IResponse> {
    return this.api.put('/plugin/enable', { name })
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  async disable(name: string): Promise<IResponse> {
    return this.api.put('/plugin/disable', { name })
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  async remove(name: string): Promise<IResponse> {
    return this.api.put('/plugin/remove', { name })
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

