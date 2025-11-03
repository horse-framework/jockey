import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DestroyService extends Observable<void> implements OnDestroy {

  private readonly _destroy$: Subject<any> = new Subject();

  constructor() {
    super(subscriber => this._destroy$.subscribe(subscriber));
  }

  ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
}
