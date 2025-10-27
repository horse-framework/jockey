import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface MoveCopyResult {
  target: string;
  moving: boolean;
}

@Component({
    selector: 'app-messsage-move-modal',
    templateUrl: './messsage-move-modal.component.html',
    styleUrls: ['./messsage-move-modal.component.css'],
    standalone: false
})
export class MesssageMoveModalComponent implements OnInit, OnDestroy {

  private _onconfirmed: Subject<MoveCopyResult> = new Subject<MoveCopyResult>();
  get onconfirmed(): Observable<MoveCopyResult> { return this._onconfirmed; }

  messageCount: number;
  target: string = '';
  private _confirmed = false;

  constructor() { }

  ngOnInit(): void {
  }

  confirm(moving: boolean): void {
    this._confirmed = true;
    this._onconfirmed.next({ target: this.target.trim(), moving: moving });
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }
}
