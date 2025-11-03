import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { SessionStore } from '../../app/stores/session-store';

export const exceptionInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const toastr: ToastrService = inject(ToastrService);
    let session: SessionStore = inject(SessionStore);

    return next(req).pipe(
        catchError(err => {

            let content = err.error;

            switch (err.status) {
                case 0:
                    toastr.error('Connection error!');
                    break;

                case 400:
                    toastr.warning('Invalid request!');
                    break;

                case 401:
                    session.setState(null);
                    router.navigateByUrl('/login');
                    break;

                case 404:
                    toastr.warning('Not found!');
                    break;

                case 422:
                    toastr.warning('Transaction failed: ' + content.detail);
                    break;

                case 500:
                default:
                    toastr.error('İşleminiz yapılırken hata oluştu!');
                    break;
            }

            return throwError(() => err);
        })
    );
};