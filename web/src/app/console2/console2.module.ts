import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConsoleComponent } from './console.component';

@NgModule({
  declarations: [ConsoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ConsoleComponent }])
  ]
})
export class Console2Module { }
