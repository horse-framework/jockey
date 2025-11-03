import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CacheForm } from '../models/cache-form';

@Component({
    selector: 'app-cache-create-modal',
    templateUrl: './cache-create-modal.component.html',
    styleUrls: ['./cache-create-modal.component.css'],
    standalone: false
})
export class CacheCreateModalComponent implements OnInit, OnDestroy {

  model: CacheForm;

  private _onconfirmed: Subject<CacheForm | null> = new Subject<CacheForm | null>();
  get onconfirmed(): Observable<CacheForm | null> { return this._onconfirmed; }
  private _confirmed: boolean = false;


  constructor() {
    this.model = {
      key: '',
      duration: 60,
      expirationWarning: 0,
      tags: [],
      tagsAll: '',
      content: ''
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }

  create(): void {

    this.model.key = this.model.key.trim();
    if (this.model.key.length < 1) {
      return;
    }

    if (this.model.tagsAll.length > 0) {
      this.model.tags = this.model.tagsAll
        .split(',')
        .map(x => x.trim())
        .filter(x => x.length > 0);
    }

    this._confirmed = true;
    this._onconfirmed.next(this.model);
  }
}
