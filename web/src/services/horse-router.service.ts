import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { DateHelper } from 'src/lib/date-helper';
import { AddBindingModel } from 'src/models/add-binding-model';
import { CreateRouterModel } from 'src/models/create-router-model';
import { HorseRouter } from 'src/models/horse-router';
import { MessageCount } from 'src/models/message-count';

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

    getGraph(name: string, resolution: string): Promise<MessageCount> {

        let url = '/router/graph?resolution=' + resolution;
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
