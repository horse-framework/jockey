import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    readonly #http: HttpClient = inject(HttpClient);

    load(): Observable<HttpResponse<Dashboard>> {
        return this.#http.get<Dashboard>('/dashboard/stats', { observe: 'response' });
    }
}
