import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheComponent } from './cache.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { CacheViewModalComponent } from './cache-view-modal/cache-view-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [CacheComponent, CacheViewModalComponent],
    imports: [
        CommonModule,
        PipesModule,
        MatDialogModule,
        RouterModule.forChild([{ path: '', component: CacheComponent }])
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CacheModule { }
