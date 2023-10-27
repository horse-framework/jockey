import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { Dashboard } from 'src/models/dashboard';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    constructor(private api: ApiClient) { }

    /** Refreshes graph data */
    load(): Promise<Dashboard> {

        return this.api.get('/dashboard/stats')
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
