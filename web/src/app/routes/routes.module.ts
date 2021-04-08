import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';


@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: RoutesComponent }])
  ]
})
export class RoutesModule { }
