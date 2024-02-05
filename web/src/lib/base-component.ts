import { Directive, OnDestroy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, takeWhile, tap } from 'rxjs/operators';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class BaseComponent implements OnDestroy {

    private _destroyed: boolean = false;
    private _lastRefresh: number = 0;

    on<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(takeWhile(() => !this._destroyed));
    }

    ngOnDestroy(): void {
        this._destroyed = true;
    }

    subscribeToListRefresh(): Observable<any> {

        this._lastRefresh = new Date().getTime();
        return this.on(interval(500))
            .pipe(filter(() => {

                let i = localStorage.getItem('refresh-interval');
                if (!i) { return false; }
                let iv = parseInt(i);
                if (iv == 0 || isNaN(iv)) { false; }

                let nextRefresh = this._lastRefresh + iv;
                let now = new Date().getTime();
                if (nextRefresh < now) {
                    this._lastRefresh = now;
                    return true;
                }

                return false;
            }));
    }
}
