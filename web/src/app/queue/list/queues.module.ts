import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuesComponent } from './queues.component';
import { RouterModule } from '@angular/router';
import { QueueCreateModalComponent } from './queue-create-modal/queue-create-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/layout/pipes/pipes.module';


@NgModule({
    declarations: [QueuesComponent, QueueCreateModalComponent],
    imports: [
        CommonModule,
        PipesModule,
        MatDialogModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: QueuesComponent }])
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class QueuesModule { }
