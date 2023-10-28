import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChannelForm } from '../../models/channel-form';

@Component({
  selector: 'app-channel-create-modal',
  templateUrl: './channel-create-modal.component.html',
  styleUrls: ['./channel-create-modal.component.css']
})
export class ChannelCreateModalComponent implements OnInit, OnDestroy {

  model: ChannelForm;

  private _onconfirmed: Subject<ChannelForm> = new Subject<ChannelForm>();
  get onconfirmed(): Observable<ChannelForm> { return this._onconfirmed; }
  private _confirmed: boolean = false;


  constructor() {
    this.model = {
      name: '',
      topic: '',
      autoDestroy: true,
      autoDestroyIdleSeconds: 15,
      clientLimit: 0,
      messageSizeLimit: 0,
      sendLastMessageAsInitial: false
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }
  create(): void {
    this._confirmed = true;
    this._onconfirmed.next(this.model);
  }
}
