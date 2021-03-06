import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseComponent } from 'src/lib/base-component';
import { HorseQueue } from 'src/models/horse-queue';
import { QueueService } from 'src/services/queue.service';

@Component({
    selector: 'app-queues',
    templateUrl: './queues.component.html',
    styleUrls: ['./queues.component.css']
})
export class QueuesComponent extends BaseComponent implements OnInit, OnDestroy {

    queues: HorseQueue[];

    constructor(private queueService: QueueService) {
        super();
    }

    async ngOnInit() {
        this.queues = await this.queueService.list();
    }
}
