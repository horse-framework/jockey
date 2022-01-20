import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from '../layout/portal-layout/confirm-modal/confirm-modal.component';
import { QueueMessageModalComponent } from './queue-message-modal/queue-message-modal.component';
import { MesssageMoveModalComponent } from './messsage-move-modal/messsage-move-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QueueComponent,
    QueueMessageModalComponent,
    MesssageMoveModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([{ path: ':name', component: QueueComponent }])
  ],
  entryComponents: [
    ConfirmModalComponent,
    QueueMessageModalComponent,
    MesssageMoveModalComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class QueueModule { }
