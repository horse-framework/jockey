import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { QueueCreateModel } from 'src/app/queue/models/queue-create-model';
import { QueueService } from 'src/app/queue/services/queue.service';

@Component({
    selector: 'app-queue-create-modal',
    templateUrl: './queue-create-modal.component.html',
    styleUrls: ['./queue-create-modal.component.css'],
    standalone: false
})
export class QueueCreateModalComponent implements OnInit, OnDestroy {

  model: QueueCreateModel = new QueueCreateModel();

  commitWhenItems = [
    { value: null, text: '(Default)' },
    { value: 'None', text: 'None' },
    { value: 'AfterReceived', text: 'After server received the message' },
    { value: 'AfterSaved', text: 'After message is saved to disk' },
    { value: 'AfterSent', text: 'After message is sent to at least one consumer' },
    { value: 'AfterAcknowledge', text: 'After a consumer send ack to server' },
  ];

  ackItems = [
    { value: null, text: '(Default)' },
    { value: 'None', text: 'Disable acknowledge system' },
    { value: 'JustRequest', text: 'Request acknowledge but keep sending messages to same consumer' },
    { value: 'WaitForAcknowledge', text: 'Do not send next message to same consumer before receive ack for previous' }
  ];

  typeItems = [
    { value: null, text: '(Default)' },
    { value: 'Push', text: 'Push: All consumers receive same message from queue (automatically)' },
    { value: 'RoundRobin', text: 'Round Robin: Only one consumer receive same message (automatically)' },
    { value: 'Pull', text: 'Pull: Only one consumer receive same message but it should send pull request' }
  ];

  autoDestroyItems = [
    { value: null, text: '(Default)' },
    { value: 'Disabled', text: 'Queue stays forever. It\'s removed only manually.' },
    { value: 'NoMessages', text: 'Queue is destroyed if empty' },
    { value: 'NoConsumers', text: 'Queue is destroyed if there are no consumers (even not empty)' },
    { value: 'Empty', text: 'Queue is destroyed when it\'s empty and there are no consumers' }
  ];

  putBackItems = [
    { value: null, text: '(Default)' },
    { value: 'No', text: 'Put back operations are disabled' },
    { value: 'Priority', text: 'Message is put back as first message (beginning of the queue)' },
    { value: 'Regular', text: 'Message is put back as last message (end of the queue)' }
  ];

  managers: string[] = [];

  @ViewChild('queueForm')
  queueForm: ElementRef;

  private _onconfirmed: Subject<QueueCreateModel> = new Subject<QueueCreateModel>();
  get onconfirmed(): Observable<QueueCreateModel> { return this._onconfirmed; }
  private _confirmed: boolean = false;

  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    this.queueService.getManagers().then(m => this.managers = m);
    interval(50)
      .pipe(filter(() => this.queueForm != null), take(1))
      .subscribe(() => {

        let div = <HTMLDivElement>this.queueForm.nativeElement;
        div.querySelectorAll('select').forEach(element => {
          let option = element.getElementsByTagName('option')[0];
          option.selected = true;
        });
      });

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
