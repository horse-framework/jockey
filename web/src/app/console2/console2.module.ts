import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { Console2Component } from './console2.component';

@NgModule({
  declarations: [
    Console2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild([{ path: '', component: Console2Component }]),
    PipesModule
  ]
})
export class Console2Module { }
