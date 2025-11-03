import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { QueueCreateModalComponent } from './queue-create-modal/queue-create-modal.component';
import { BaseFormComponent } from '../../../lib/base-form.component';
import { HorseQueue } from '../models/horse-queue';
import { QueueService } from '../services/queue.service';

@Component({
    selector: 'app-queues',
    templateUrl: './queues.component.html',
    styleUrls: ['./queues.component.css'],
    standalone: false
})
export class QueuesComponent extends BaseFormComponent implements OnInit, OnDestroy {

    queues: HorseQueue[] = [];

    constructor(private queueService: QueueService, private dialog: MatDialog) {
        super();
    }

    async ngOnInit() {
        this.queueService.list().subscribe(r => this.queues = r.body!);
        this.subscribeToListRefresh().subscribe(() => this.queueService.list().subscribe(r => this.queues = r.body!));
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
                        .subscribe(msg => {
                            this.ngOnInit();
                        });
            });
    }

    viewManagers(): void {
        this.queueService.getManagers().subscribe(response => {
            let managers = response.body!;
            let str = 'Defined manager names are: ' + managers.join(', ');
            alert(str);
        });
    }
}
