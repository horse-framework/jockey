import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDetailComponent } from './client-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../../layout/pipes/pipes.module';

@NgModule({
  declarations: [
    ClientDetailComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([{ path: ':id', component: ClientDetailComponent }])
  ]
})
export class ClientDetailModule { }
