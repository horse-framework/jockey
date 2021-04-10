import { Injectable } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Base64Helper } from 'src/lib/base64-helper';
import { LoginResult } from 'src/models/login-result';
import { SessionUser } from 'src/models/session-user';

@Injectable({
    providedIn: 'root'
})
export class SessionService {

    private _current: SessionUser = null;
    private _changed: Subject<SessionUser> = new Subject<SessionUser>();

    get onchanged(): Observable<SessionUser> {
        return this._changed.pipe();
    }

    constructor() {
    }

    run(): void {
        this._current = this.read();
        this._changed = new Subject<SessionUser>();

        interval(1000)
            .subscribe(() => {
                this._current = this.read();
            });
    }

    set(login: LoginResult): SessionUser {

        localStorage.setItem(environment.storage.token, login.token);
        let user = this.deserialize(login.token);

        this._current = user;
        this._changed.next(user);

        return user;
    }


    refresh(token: string): void {
        let current = localStorage.getItem(environment.storage.token);
        if (!current)
            return;

        localStorage.setItem(environment.storage.token, token);
    }

    clear(): void {
        let old = this._current;

        localStorage.removeItem(environment.storage.token);
        this._current = null;

        if (this._changed && old != null)
            this._changed.next(null);
    }

    get(): SessionUser {
        if (this._current)
            return this._current;

        this._current = this.read();
        return this._current;
    }

    read(): SessionUser {
        try {
            let str = localStorage.getItem(environment.storage.token);
            if (str == null) {
                if (this._current && this._changed)
                    this._changed.next(null);

                return null;
            }

            let user = this.deserialize(str);

            if (!this._current && this._changed && user)
                this._changed.next(user);

            this._current = user;
            return user;
        }
        catch {
            localStorage.removeItem(environment.storage.token);
            return null;
        }
    }

    private deserialize(token: string): SessionUser {
        let token_info = JSON.parse(Base64Helper.readBearer(token));
        let user = new SessionUser();

        user.token = token;
        user.id = token_info.sub;
        user.name = token_info.name;
        user.expiration = parseInt(token_info.exp) * 1000;

        return user;
    }

}
