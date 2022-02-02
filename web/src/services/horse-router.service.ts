import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { CreateRouterModel } from 'src/models/create-router-model';
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

    create(model: CreateRouterModel): Promise<any> {

        return this.api.post('/router/create', model)
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
