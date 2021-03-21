import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuesComponent } from './queues.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [QueuesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: QueuesComponent }])
  ]
})
export class QueuesModule { }
