import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelMessageModalComponent } from './channel-message-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PipesModule } from 'src/app/layout/pipes/pipes.module';

@NgModule({
  declarations: [ChannelMessageModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    PipesModule
  ],
  exports: [ChannelMessageModalComponent]
})
export class ChannelMessageModalModule { }
