import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleComponent } from './console.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ConsoleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ConsoleComponent }])
  ]
})
export class ConsoleModule { }
