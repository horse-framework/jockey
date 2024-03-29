import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { ConsoleComponent } from './console.component';

@NgModule({
  declarations: [
    ConsoleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ConsoleComponent }]),
    PipesModule
  ]
})
export class ConsoleModule { }
