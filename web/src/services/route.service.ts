import { Injectable } from '@angular/core';
import { ApiClient } from 'src/lib/api-client';

@Injectable({
    providedIn: 'root'
})
export class RouteService {

    constructor(private api: ApiClient) { }
}
