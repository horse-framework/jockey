import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddBindingModel } from 'src/models/add-binding-model';

@Component({
  selector: 'app-binding-add-modal',
  templateUrl: './binding-add-modal.component.html',
  styleUrls: ['./binding-add-modal.component.css']
})
export class BindingAddModalComponent implements OnInit, OnDestroy {

  model: AddBindingModel = new AddBindingModel();

  bindingTypes = [
    { value: 'queue', text: 'Queue Binding' },
    { value: 'dynamic', text: 'Dynamic Queue Binding' },
    { value: 'topic', text: 'Topic Binding' },
    { value: 'direct', text: 'Direct Binding' },
    { value: 'http', text: 'Http Binding' },
  ];

  routerMethods = [
    { value: 'RoundRobin', text: 'Round Robin: Each message is redirected different targets' },
    { value: 'Distribute', text: 'Distribute: Each message is sent to all targets' },
    { value: 'OnlyFirst', text: 'Only First: Each message is redirected to only first active targets' }
  ];

  httpMethods = [
    { value: 'Get', text: 'GET' },
    { value: 'Post', text: 'POST' },
    { value: 'Put', text: 'PUT' },
    { value: 'Patch', text: 'PATCH' },
    { value: 'Delete', text: 'DELETE' }
  ];

  interactions = [
    { value: 'None', text: 'No response interaction' },
    { value: 'Response', text: 'Router waits response from that binding' },
  ];

  private _onconfirmed: Subject<AddBindingModel> = new Subject<AddBindingModel>();
  get onconfirmed(): Observable<AddBindingModel> { return this._onconfirmed; }
  private _confirmed: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this._confirmed = true;
    this._onconfirmed.next(this.model);
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }

  add() {

  }

}
