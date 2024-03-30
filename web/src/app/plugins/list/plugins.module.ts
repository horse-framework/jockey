import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/layout/pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { PluginsComponent } from './plugins.component';
import { PluginsService } from '../services/plugins.service';

@NgModule({
  declarations: [PluginsComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: PluginsComponent }])
  ],
  providers: [PluginsService]
})
export class PluginsModule { }
