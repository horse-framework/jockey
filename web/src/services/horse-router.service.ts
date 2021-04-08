import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { HorseRouter } from 'src/models/horse-router';

@Injectable({
    providedIn: 'root'
})
export class HorseRouterService {

    private _routers: HorseRouter[];

    constructor(private api: ApiClient) { }

    list(): Promise<HorseRouter[]> {
        return this.api.get('/router/list')
            .pipe(
                map(response => {
                    if (response.ok()) {
                        this._routers = response.data;
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }
}
