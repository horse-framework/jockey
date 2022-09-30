import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { CacheInfo } from 'src/models/cache-info';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private api: ApiClient) { }

  list(): Promise<CacheInfo[]> {

    return this.api.get('/cache/list')
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  get(key: string): Promise<any> {

    return this.api.get('/cache/get?key=' + key)
      .pipe(
        map(response => {
          if (response.ok()) {
            return response.data;
          }
          return null;
        }))
      .toPromise();
  }

  remove(key: string): Promise<any> {

    return this.api.delete('/cache/remove?key=' + key)
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
