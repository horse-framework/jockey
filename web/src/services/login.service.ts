import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionUser } from '../models/session-user';
import { SessionStore } from '../app/stores/session-store';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    readonly #http: HttpClient = inject(HttpClient);
    readonly #session: SessionStore = inject(SessionStore);

    login(username: string, password: string): Observable<SessionUser | null> {

        let model = {
            username: username,
            password: password
        };

        return this.#http.post<SessionUser>('/user/login', model, { observe: 'response' })
            .pipe(
                map(response => {

                    if (response.ok) {
                        this.#session.setState(response.body)
                    }
                    return this.#session.state();
                })
            );
    }
}
