import { Directive, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export class BaseComponent implements OnDestroy {

    private _destroyed: boolean = false;

    on<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(takeWhile(() => !this._destroyed));
    }

    ngOnDestroy(): void {
        this._destroyed = true;
    }
}
