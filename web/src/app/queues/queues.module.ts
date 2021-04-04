import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueuesComponent } from './queues.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';


@NgModule({
  declarations: [QueuesComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: QueuesComponent }])
  ]
})
export class QueuesModule { }
