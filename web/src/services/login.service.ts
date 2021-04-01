import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiClient } from 'src/lib/api-client';
import { SessionUser } from 'src/models/session-user';
import { SessionService } from './session.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private api: ApiClient, private session: SessionService) {
    }

    login(username: string, password: string): Promise<SessionUser> {

        let model = {
            username: username,
            password: password
        };

        return this.api.post('/user/login', model)
            .pipe(
                map(response => {
                    this.session.clear();
                    
                    if (response.ok()) {
                        if (response.data.ok) {
                            this.session.set(response.data);
                            return this.session.get();
                        }
                    }

                    return this.session.get();
                })
            )
            .toPromise();
    }
}
