import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheComponent } from './cache.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';



@NgModule({
  declarations: [CacheComponent],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule.forChild([{ path: '', component: CacheComponent }])
  ]
})
export class CacheModule { }
