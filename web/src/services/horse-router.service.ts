import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { AddBindingModel } from 'src/models/add-binding-model';
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

    get(name: string): Promise<HorseRouter> {

        return this.api.get('/router/get?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    remove(name: string): Promise<any> {

        return this.api.delete('/router/remove?name=' + name)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }

    addBinding(model: AddBindingModel): Promise<any> {

        return this.api.post('/router/binding', model)
            .pipe(
                map(response => {
                    if (response.ok()) {
                        return response.data;
                    }
                    return null;
                }))
            .toPromise();
    }


    removeBinding(router: string, binding: string): Promise<any> {

        return this.api.delete('/router/binding?routerName=' + router + '&bindingName=' + binding)
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
