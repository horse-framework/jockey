import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AddBindingModel } from 'src/models/add-binding-model';
import { HorseQueueSummary } from 'src/app/queue/models/horse-queue';
import { QueueService } from 'src/app/queue/services/queue.service';

@Component({
  selector: 'app-binding-add-modal',
  templateUrl: './binding-add-modal.component.html',
  styleUrls: ['./binding-add-modal.component.css']
})
export class BindingAddModalComponent implements OnInit, OnDestroy {

  model: AddBindingModel = new AddBindingModel();

  bindingTypes = [
    { value: 'QueueBinding', text: 'Queue Binding' },
    { value: 'AutoQueueBinding', text: 'Auto Queue Binding' },
    { value: 'DynamicQueueBinding', text: 'Dynamic Queue Binding' },
    { value: 'TopicBinding', text: 'Topic Binding' },
    { value: 'DirectBinding', text: 'Direct Binding' },
    { value: 'HttpBinding', text: 'Http Binding' },
    { value: 'custom', text: '(Custom Binding)' }
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

  queues: HorseQueueSummary[];

  constructor(private queueService: QueueService) {
  }

  ngOnInit(): void {
    this.queueService.listSummary().then(items => {
      this.queues = items;
    });
  }

  ngOnDestroy(): void {
    if (!this._confirmed)
      this._onconfirmed.next(null);
  }

  add() {
    this._confirmed = true;
    this._onconfirmed.next(this.model);
  }

}
