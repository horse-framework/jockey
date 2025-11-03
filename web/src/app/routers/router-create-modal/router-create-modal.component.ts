import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CreateRouterModel } from '../../../models/create-router-model';

@Component({
  selector: 'app-router-create-modal',
  templateUrl: './router-create-modal.component.html',
  styleUrls: ['./router-create-modal.component.css'],
  standalone: false
})
export class RouterCreateModalComponent implements OnInit, OnDestroy {

  model: CreateRouterModel = new CreateRouterModel();

  routerMethods = [
    { value: 'RoundRobin', text: 'Round Robin: Each message is redirected different binding' },
    { value: 'Distribute', text: 'Distribute: Each message is sent to all bindings' },
    { value: 'OnlyFirst', text: 'Only First: Each message is redirected to only first active binding' }
  ];

  private _onconfirmed: Subject<CreateRouterModel | null> = new Subject<CreateRouterModel | null>();
  get onconfirmed(): Observable<CreateRouterModel | null> { return this._onconfirmed; }
  private _confirmed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }

  create() {
    this._confirmed = true;
    this._onconfirmed.next(this.model);
  }

}
