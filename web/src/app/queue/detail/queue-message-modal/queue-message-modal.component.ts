import { Component, OnInit } from '@angular/core';
import { QueueMessage } from 'src/app/queue/models/queue-message';

@Component({
  selector: 'app-queue-message-modal',
  templateUrl: './queue-message-modal.component.html',
  styleUrls: ['./queue-message-modal.component.css']
})
export class QueueMessageModalComponent implements OnInit {

  message: QueueMessage;
  consumed: boolean = false;
  isJson: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setJson(value: boolean) {
    this.isJson = value;
  }
}
