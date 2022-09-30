import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutersComponent } from './routers.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { RouterCreateModalComponent } from './router-create-modal/router-create-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RoutersComponent, RouterCreateModalComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: RoutersComponent }])
  ]
})
export class RoutersModule { }
