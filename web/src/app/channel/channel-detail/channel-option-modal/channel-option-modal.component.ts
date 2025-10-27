import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OptionValue } from 'src/app/queue/detail/queue-option-modal/queue-option-modal.component';

@Component({
    selector: 'app-channel-option-modal',
    templateUrl: './channel-option-modal.component.html',
    styleUrls: ['./channel-option-modal.component.css'],
    standalone: false
})
export class ChannelOptionModalComponent implements OnInit, OnDestroy {

  private _onconfirmed: Subject<OptionValue> = new Subject<OptionValue>();
  get onconfirmed(): Observable<OptionValue> { return this._onconfirmed; }

  messageCount: number;
  model: OptionValue = { confirmed: false, title: '', property: '', value: null, type: 'text' };

  private _confirmed = false;

  constructor() { }

  ngOnInit(): void {
  }

  confirm(): void {
    this._confirmed = true;
    this.model.confirmed = true;
    this._onconfirmed.next(this.model);
  }

  ngOnDestroy(): void {
    if (!this._confirmed) {
      this.model.confirmed = false;
      this._onconfirmed.next(this.model);
    }
  }
}