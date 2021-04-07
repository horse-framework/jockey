import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueueComponent } from './queue.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';


@NgModule({
  declarations: [QueueComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: ':name', component: QueueComponent }])
  ]
})
export class QueueModule { }
