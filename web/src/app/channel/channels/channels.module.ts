import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChannelCreateModalComponent } from './channel-create-modal/channel-create-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/layout/pipes/pipes.module';
import { ChannelsComponent } from './channels.component';
import { ChannelMessageModalModule } from '../channel-message-modal/channel-message-modal.module';


@NgModule({
  declarations: [ChannelsComponent, ChannelCreateModalComponent],
  imports: [
    CommonModule,
    PipesModule,
    MatDialogModule,
    FormsModule,
    ChannelMessageModalModule,
    RouterModule.forChild([{ path: '', component: ChannelsComponent }])
  ]
})
export class ChannelsModule { }
