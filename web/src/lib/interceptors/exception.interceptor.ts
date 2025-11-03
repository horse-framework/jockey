import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const exceptionInterceptor: HttpInterceptorFn = (req, next) => {
    const router = inject(Router);
    const toastr: ToastrService = inject(ToastrService);

    return next(req).pipe(
        catchError(err => {

            let content = err.error;

            switch (err.status) {
                case 0:
                    toastr.error('Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
                    break;

                case 400:
                    toastr.warning('Lütfen girdiğiniz bilgileri kontrol edin.');
                    break;

                case 404:
                    toastr.warning('Kayıt bulunamadı!');
                    break;

                case 422:
                    toastr.warning('İşleminiz Yapılamadı: ' + content.detail);
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