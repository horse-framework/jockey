import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css'],
  standalone: false
})
export class ConfirmModalComponent implements OnDestroy {

  private _onclosed: Subject<any> = new Subject<any>();
  get onclosed(): Observable<any> { return this._onclosed; }

  message: string = '';
  private _confirmed = false;

  constructor() {
  }

  ngOnDestroy() {
    if (!this._confirmed)
      this._onclosed.next(false);
  }

  confirm(value: boolean): void {
    this._confirmed = true;
    this._onclosed.next(value);
  }

}
