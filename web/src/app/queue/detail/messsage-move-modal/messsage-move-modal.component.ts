import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-messsage-move-modal',
  templateUrl: './messsage-move-modal.component.html',
  styleUrls: ['./messsage-move-modal.component.css']
})
export class MesssageMoveModalComponent implements OnInit, OnDestroy {

  private _onconfirmed: Subject<string> = new Subject<string>();
  get onconfirmed(): Observable<string> { return this._onconfirmed; }

  messageCount: number;
  target: string = '';
  private _confirmed = false;

  constructor() { }

  ngOnInit(): void {
  }

  confirm(): void {
    this._confirmed = true;
    this._onconfirmed.next(this.target);
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }
}
