import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteComponent } from './route.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RouteComponent }])
  ]
})
export class RouteModule { }
