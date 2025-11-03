import { Component, OnDestroy } from "@angular/core";
import { filter, interval, Observable, takeWhile } from "rxjs";

@Component({ template: '' })
export class BaseFormComponent implements OnDestroy {

    private _lastRefresh: number = 0;
    #elementsDisabled: boolean = false;
    #scope: string = '';
    elementsDisabled = (): boolean => this.#elementsDisabled;

    #destroyed: boolean = false;

    get destroyed(): boolean { return this.#destroyed; }

    disableFormElements(scope: string | null = null): boolean {
        if (this.#elementsDisabled) {
            return false;
        }

        this.#elementsDisabled = true;
        this.#scope = scope ?? '';
        let s = this.#scope.length > 0 ? this.#scope + ' ' : '';
        let selector = s + 'input,' + s + 'select,' + s + 'button,[data-process-locked],multi-select';

        document.querySelectorAll(selector).forEach(e => {
            if (e.hasAttribute('non-processable'))
                return;

            e.setAttribute('disabled', 'disabled');
        });

        return true;
    }

    enableFormElements(): boolean {
        if (!this.#elementsDisabled) {
            return false;
        }

        this.#elementsDisabled = false;
        let s = this.#scope.length > 0 ? this.#scope + ' ' : '';
        let selector = s + 'input,' + s + 'select,' + s + 'button,[data-process-locked],multi-select';

        document.querySelectorAll(selector).forEach(e => {
            if (e.hasAttribute('non-processable'))
                return;

            e.removeAttribute('disabled');
        });

        return true;
    }

    ngOnDestroy(): void {
        this.#destroyed = true;
    }

    on<T>(observable: Observable<T>): Observable<T> {
        return observable.pipe(takeWhile(() => !this.#destroyed));
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