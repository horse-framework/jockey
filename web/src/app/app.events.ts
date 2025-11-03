import { Injectable } from "@angular/core";
import { filter, map, Observable, Subject, takeWhile } from "rxjs";
import { BaseFormComponent } from "../lib/base-form.component";

export interface AppEvent {
    name: string;
    payload: any;
}

@Injectable({
    providedIn: 'root'
})
export class AppEvents {

    _subject: Subject<AppEvent> = new Subject<AppEvent>();

    raise(name: string, payload: any): void {
        this._subject.next({ name, payload });
    }

    subscribe(name: string, subscriberComponent: BaseFormComponent | null = null): Observable<any> {
        return this._subject
            .pipe(
                takeWhile(() => subscriberComponent == null || !subscriberComponent.destroyed),
                filter(x => x.name == name),
                map(x => x.payload)
            );
    }
}