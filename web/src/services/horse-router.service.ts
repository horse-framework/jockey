import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { HorseRouter } from '../models/horse-router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CreateRouterModel } from '../models/create-router-model';
import { MessageCount } from '../models/message-count';
import { DateHelper } from '../lib/helpers/date.helper';
import { AddBindingModel } from '../models/add-binding-model';

@Injectable({
    providedIn: 'root'
})
export class HorseRouterService {

    readonly #http: HttpClient = inject(HttpClient);

    list(): Observable<HttpResponse<HorseRouter[]>> {
        return this.#http.get<HorseRouter[]>('/router/list', { observe: 'response' });
    }

    create(model: CreateRouterModel): Observable<HttpResponse<any>> {
        return this.#http.post('/router/create', model, { observe: 'response' });
    }

    get(name: string): Observable<HttpResponse<HorseRouter>> {
        return this.#http.get<HorseRouter>('/router/get?name=' + name, { observe: 'response' });
    }

    getGraph(name: string): Observable<MessageCount | null> {
        let url = '/router/graph';
        if (name != null && name.length > 0) {
            url += '&name=' + name;
        }

        return of(this)
            .pipe(
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

    remove(name: string): Observable<HttpResponse<any>> {
        return this.#http.delete('/router/remove?name=' + name, { observe: 'response' });
    }

    addBinding(model: AddBindingModel): Observable<HttpResponse<any>> {
        return this.#http.post('/router/binding', model, { observe: 'response' });
    }

    removeBinding(router: string, binding: string): Observable<HttpResponse<any>> {
        return this.#http.delete('/router/binding?routerName=' + router + '&bindingName=' + binding, { observe: 'response' });
    }
}
