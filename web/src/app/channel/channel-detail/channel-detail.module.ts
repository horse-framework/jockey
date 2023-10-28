import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelDetailComponent } from './channel-detail.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/layout/pipes/pipes.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChannelOptionModalComponent } from './channel-option-modal/channel-option-modal.component';

@NgModule({
  declarations: [
    ChannelDetailComponent,
    ChannelOptionModalComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([{ path: ':name', component: ChannelDetailComponent }])
  ]
})
export class ChannelDetailModule { }
