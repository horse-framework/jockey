import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const unauthorizeInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);

    return next(req).pipe(
        catchError(err => {
            if (err.status === 401) {
                router.navigate(['/login']);
            }

            return throwError(() => err);
        })
    );
};