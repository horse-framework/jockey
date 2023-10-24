import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { ChannelCreateModalComponent } from './channel-create-modal/channel-create-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ChannelMessageModalComponent } from './channel-message-modal/channel-message-modal.component';


@NgModule({
  declarations: [ChannelsComponent, ChannelCreateModalComponent, ChannelMessageModalComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ChannelsComponent }])
  ]
})
export class ChannelsModule { }
