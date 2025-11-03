import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CacheInfo } from '../models/cache-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  readonly #http: HttpClient = inject(HttpClient);

  list(): Observable<HttpResponse<CacheInfo[]>> {
    return this.#http.get<CacheInfo[]>('/cache/list', { observe: 'response' });
  }

  get(key: string): Observable<HttpResponse<CacheInfo>> {
    return this.#http.get<CacheInfo>('/cache/get?key=' + key, { observe: 'response' });
  }

  remove(key: string): Observable<HttpResponse<any>> {
    return this.#http.delete('/cache/remove?key=' + key, { observe: 'response' });
  }

  create(key: string, content: string, duration: number, expirationWarning: number, tags: string[]): Observable<HttpResponse<any>> {
    let model = { key, content, duration, expirationWarning, tags };
    return this.#http.post('/cache/create', model, { observe: 'response' });
  }
}
