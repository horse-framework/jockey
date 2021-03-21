import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [QueueComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: QueueComponent }])
  ]
})
export class QueueModule { }
