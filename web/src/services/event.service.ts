import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _event: Subject<any> = new Subject<any>();

  raise(eventName: string, payload: any, save: boolean = true): void {
    if (save) {
      localStorage.setItem(eventName, payload);
    }
    this._event.next({ eventName, payload });
  }

  subscribe(eventName: string): Observable<any> {
    let observable = this._event
      .pipe(
        filter(a => a.eventName == eventName),
        map(a => a.payload)
      );

    let saved = localStorage.getItem(eventName);
    if (saved) {
      this.raise(eventName, saved);
    }

    return observable;
  }
}
