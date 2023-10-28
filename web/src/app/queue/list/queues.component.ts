import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { BaseComponent } from 'src/lib/base-component';
import { HorseQueue } from 'src/app/queue/models/horse-queue';
import { QueueService } from 'src/app/queue/services/queue.service';
import { QueueCreateModalComponent } from './queue-create-modal/queue-create-modal.component';

@Component({
    selector: 'app-queues',
    templateUrl: './queues.component.html',
    styleUrls: ['./queues.component.css']
})
export class QueuesComponent extends BaseComponent implements OnInit, OnDestroy {

    queues: HorseQueue[];

    constructor(private queueService: QueueService, private dialog: MatDialog) {
        super();
    }

    async ngOnInit() {
        this.queues = await this.queueService.list();
    }

    create(): void {

        let dialogRef = this.dialog.open(QueueCreateModalComponent, { width: '600px' });
        let component = <QueueCreateModalComponent>dialogRef.componentInstance;

        component.onconfirmed
            .pipe(take(1))
            .subscribe(value => {
                if (value)
                    this.queueService
                        .create(value)
                        .then(msg => {
                            this.ngOnInit();
                        });
            });
    }

    viewManagers(): void {
        this.queueService.getManagers().then(managers => {
            let str = 'Defined manager names are: ' + managers.join(', ');
            alert(str);
        });
    }
}
