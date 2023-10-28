import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../layout/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { QueueMessageModalComponent } from './queue-message-modal/queue-message-modal.component';
import { MesssageMoveModalComponent } from './messsage-move-modal/messsage-move-modal.component';
import { FormsModule } from '@angular/forms';
import { QueuePushModalComponent } from './queue-push-modal/queue-push-modal.component';
import { QueueOptionModalComponent } from './queue-option-modal/queue-option-modal.component';
import { QueueDetailComponent } from './queue-detail.component';


@NgModule({
    declarations: [
        QueueDetailComponent,
        QueueMessageModalComponent,
        MesssageMoveModalComponent,
        QueuePushModalComponent,
        QueueOptionModalComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        MatDialogModule,
        FormsModule,
        RouterModule.forChild([{ path: ':name', component: QueueDetailComponent }])
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class QueueModule { }
