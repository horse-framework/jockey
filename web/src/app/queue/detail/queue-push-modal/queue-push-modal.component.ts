import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QueuePushMessage } from '../../models/queue-message';

@Component({
  selector: 'app-queue-push-modal',
  templateUrl: './queue-push-modal.component.html',
  styleUrls: ['./queue-push-modal.component.css'],
  standalone: false
})
export class QueuePushModalComponent implements OnInit, OnDestroy {

  message: QueuePushMessage | null = null;

  addingHeaderKey: string | undefined;
  addingHeaderValue: string | undefined;

  @ViewChild('headerKeyInput')
  headerKeyInput: ElementRef | undefined;

  @ViewChild('headerValueInput')
  headerValueInput: ElementRef | undefined;

  private _onconfirmed: Subject<QueuePushMessage | null> = new Subject<QueuePushMessage | null>();
  get onconfirmed(): Observable<QueuePushMessage | null> { return this._onconfirmed; }
  private _confirmed: boolean = false;

  constructor() {
    this.message = new QueuePushMessage();
    this.message.id = this.generateUUID();
    this.message.headers = [];
    this.message.contentType = 0;
    this.message.priority = false;
    this.message.message = "";
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }

  headerKeyUp(key: boolean, event: KeyboardEvent) {
    if (event.key == 'Enter') {
      if (key)
        this.headerValueInput!.nativeElement.focus();
      else
        this.addHeader();
    }
  }

  removeHeader(key: string): void {
    let index = this.message!.headers!.findIndex(x => x.name == key);
    if (index < 0)
      return;

    this.message!.headers!.splice(index, 1);
  }

  addHeader(): void {

    let key = this.addingHeaderKey!.trim();
    let value = this.addingHeaderValue!.trim();

    if (key.length < 1 || value.length < 1)
      return;

    this.message!.headers!.push({ name: key, value: value });
    this.addingHeaderKey = '';
    this.addingHeaderValue = '';
    this.headerKeyInput!.nativeElement.focus();
  }

  push(): void {
    this._confirmed = true;
    this._onconfirmed.next(this.message);
  }

  private generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) {//Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {//Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
