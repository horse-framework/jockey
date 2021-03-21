import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutesComponent } from './routes.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RoutesComponent }])
  ]
})
export class RoutesModule { }
