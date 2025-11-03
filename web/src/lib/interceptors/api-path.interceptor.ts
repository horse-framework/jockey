import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { ENVIRONMENT } from "../environment.initializer";

export const apiPathInterceptor: HttpInterceptorFn = (req, next) => {

    let env = inject(ENVIRONMENT);

    let fullpath;

    if (env.apiUrl.endsWith('/')) {
        if (req.url.startsWith('/'))
            fullpath = env.apiUrl + req.url.substring(1);
        else
            fullpath = env.apiUrl + req.url;
    }
    else {
        if (req.url.startsWith('/'))
            fullpath = env.apiUrl + req.url;
        else
            fullpath = env.apiUrl + '/' + req.url;
    }

    return next(req.clone({
        url: fullpath
    }));
};