import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionStore } from '../../app/stores/session-store';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

    let sessionStore = inject(SessionStore);
    let token = sessionStore.state()?.token;

    if (token) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    return next(req);
};