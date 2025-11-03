import { inject, Injectable } from '@angular/core';
import { PluginAssembly } from '../models/plugin-assembly';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  readonly #http: HttpClient = inject(HttpClient);

  list(): Observable<HttpResponse<PluginAssembly[]>> {
    return this.#http.get<PluginAssembly[]>('/plugin/list', { observe: 'response' });
  }

  load(file: File): Observable<HttpResponse<any>> {
    let form = new FormData();
    form.append('file', file, file.name);
    return this.#http.post('/plugin/load', form, { observe: 'response' });
  }

  enable(name: string): Observable<HttpResponse<any>> {
    return this.#http.put('/plugin/enable', { name }, { observe: 'response' });
  }

  disable(name: string): Observable<HttpResponse<any>> {
    return this.#http.put('/plugin/disable', { name }, { observe: 'response' });
  }

  remove(name: string): Observable<HttpResponse<any>> {
    return this.#http.put('/plugin/remove', { name }, { observe: 'response' });
  }
}

