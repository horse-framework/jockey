import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface OptionValue {
  confirmed: boolean;
  title: string;
  property: string;
  value: any;
  type: string;
}

@Component({
  selector: 'app-queue-option-modal',
  templateUrl: './queue-option-modal.component.html',
  styleUrls: ['./queue-option-modal.component.css'],
  standalone: false
})
export class QueueOptionModalComponent implements OnInit, OnDestroy {

  private _onconfirmed: Subject<OptionValue> = new Subject<OptionValue>();
  get onconfirmed(): Observable<OptionValue> { return this._onconfirmed; }

  messageCount: number = 0;
  model: OptionValue = { confirmed: false, title: '', property: '', value: null, type: 'text' };

  private _confirmed = false;

  autoDestroyItems = [
    { value: 'Disabled', text: 'Queue stays forever. It\'s removed only manually.' },
    { value: 'NoMessages', text: 'Queue is destroyed if empty' },
    { value: 'NoConsumers', text: 'Queue is destroyed if there are no consumers (even not empty)' },
    { value: 'Empty', text: 'Queue is destroyed when it\'s empty and there are no consumers' }
  ];

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