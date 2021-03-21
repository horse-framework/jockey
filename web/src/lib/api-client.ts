import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { SessionService } from 'src/services/session.service';
import { TransactionResult } from 'src/models/transaction-result';
import { catchError, filter, map, mergeMap, take, takeWhile } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { RequestProgress } from 'src/models/request-progress';
import { environment } from 'src/environments/environment';
import { ApiResponse, IResponse } from 'src/models/api-response';

@Injectable({ providedIn: 'root' })
export class ApiClient {

    constructor(private http: HttpClient, private session: SessionService) {
    }

    private getOptions(contentType: string): any {
        let user = this.session.get();

        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Origin', '*');

        if (contentType != null)
            headers = headers.set('Content-Type', contentType);

        if (user != null && user.token != null && user.token.length > 0)
            headers = headers.set('Authorization', 'Bearer ' + user.token);

        let httpOptions = {
            headers: headers,
            withCredentials: true
        };

        return httpOptions;
    }

    get(url: string, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(true, 'GET', url, null, progress);

        return this.request(true, 'GET', url, null);
    }

    delete(url: string, model?: any, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(true, 'DELETE', url, JSON.stringify(model), progress);

        return this.request(true, 'DELETE', url, JSON.stringify(model));
    }

    post(url: string, model: any, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(true, 'POST', url, JSON.stringify(model), progress);

        return this.request(true, 'POST', url, JSON.stringify(model));
    }

    put(url: string, model: any, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(true, 'PUT', url, JSON.stringify(model), progress);

        return this.request(true, 'PUT', url, JSON.stringify(model));
    }

    patch(url: string, model: any, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(true, 'PATCH', url, JSON.stringify(model), progress);

        return this.request(true, 'PATCH', url, JSON.stringify(model));
    }

    postForm(url: string, form: FormData, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(false, 'POST', url, form, progress);

        return this.request(false, 'POST', url, form);
    }

    putForm(url: string, form: FormData, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(false, 'PUT', url, form, progress);

        return this.request(false, 'PUT', url, form);
    }

    patchForm(url: string, form: FormDataEntryValue, progress?: RequestProgress): Observable<IResponse> {
        if (progress)
            return this.requestProgress(false, 'PATCH', url, form, progress);

        return this.request(false, 'PATCH', url, form);
    }

    request(json: boolean, method: string, url: string, body: any): Observable<IResponse> {
        return of({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(

            //subscribe only once
            take(1),

            //prepares the request
            mergeMap(input => {
                let options = this.getOptions(input.json ? 'application/json' : null);

                let fullUrl = input.url;
                if (fullUrl.indexOf('//') < 0) {
                    let url_slash = '';
                    if (!fullUrl.startsWith('/'))
                        url_slash = '/';

                    fullUrl = environment.api.url + url_slash + fullUrl;
                }

                switch (method) {
                    case 'GET':
                        return this.http.get<any>(fullUrl, options);

                    case 'DELETE':
                        return this.http.delete<any>(fullUrl, options);

                    case 'POST':
                        return this.http.post<any>(fullUrl, body, options);

                    case 'PUT':
                        return this.http.put<any>(fullUrl, body, options);

                    case 'PATCH':
                        return this.http.patch<any>(fullUrl, body, options);

                }

                return of(null);
            }),

            //gets the response
            map(value => {
                var response: any = value;
                let result = new ApiResponse();
                result.statusCode = 200;
                result.statusMessage = 'OK';
                result.data = response;
                result.success = true;

                return result;
            }),

            //gets the failed response
            catchError(err => {
                let e = <HttpErrorResponse>err;

                let result = new ApiResponse();
                result.statusCode = e.status;
                result.statusMessage = e.message;
                result.error = e.error;
                result.success = false;

                if (result.statusCode == 401)
                    this.session.clear();

                return of(result);
            })
        );

    }

    requestProgress(json: boolean, method: string, url: string, body: any, progress: RequestProgress): Observable<IResponse> {
        let finished = false;

        return of({
            json: json,
            method: method,
            url: url,
            body: body
        }).pipe(

            //subscribe only once
            takeWhile(() => !finished && !progress.canceled),

            //prepares the request
            mergeMap(input => {
                let options = this.getOptions(input.json ? 'application/json' : null);
                options.reportProgress = true;
                options.observe = 'events';

                let fullUrl = input.url;
                if (fullUrl.indexOf('//') < 0) {
                    let url_slash = '';
                    if (!fullUrl.startsWith('/'))
                        url_slash = '/';

                    fullUrl = environment.api.url + url_slash + fullUrl;
                }

                switch (method) {
                    case 'GET':
                        return this.http.get<any>(fullUrl, options);

                    case 'DELETE':
                        return this.http.delete<any>(fullUrl, options);

                    case 'POST':
                        return this.http.post<any>(fullUrl, body, options);

                    case 'PUT':
                        return this.http.put<any>(fullUrl, body, options);

                    case 'PATCH':
                        return this.http.patch<any>(fullUrl, body, options);

                }

                return of(null);
            }),

            map(value => {
                if (progress.canceled)
                    throw new Error('file upload canceled');

                if (value.type == HttpEventType.UploadProgress) {
                    if (progress) {
                        let num = Math.round(100 * value.loaded / value.total);
                        progress.progress(num);
                    }

                    return null;
                }
                else if (value.type == HttpEventType.Response) {
                    finished = true;
                    return value;
                }

                return null;
            }),

            filter(value => value != null),

            //gets the response
            map(value => {
                var response: any = value;
                let result = new ApiResponse();
                result.statusCode = 200;
                result.statusMessage = 'OK';
                result.data = response.body;
                result.success = true;

                return result;
            }),

            //gets the failed response
            catchError(err => {
                let e = <HttpErrorResponse>err;

                let result = new ApiResponse();
                result.statusCode = e.status;
                result.statusMessage = e.message;
                result.error = e.error;
                result.success = false;

                if (result.statusCode == 401)
                    this.session.clear();

                return of(result);
            })
        );

    }

    toTransaction(response: Observable<IResponse>): Promise<TransactionResult> {
        return response.pipe(
            mergeMap(response => {
                if (response.data != null)
                    return of(<TransactionResult>response.data);
                else if (response.error != null)
                    return of(<TransactionResult>response.error);

                return of(null);
            })
        ).toPromise();
    }

    toObject<T>(response: Observable<IResponse>): Promise<T> {
        return response.pipe(
            mergeMap(response => {
                if (response.ok())
                    return of(<T>response.data);

                return of(null);
            })
        ).toPromise<T>();
    }
}