import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutersComponent } from './routers.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';


@NgModule({
  declarations: [RoutersComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: RoutersComponent }])
  ]
})
export class RoutersModule { }
