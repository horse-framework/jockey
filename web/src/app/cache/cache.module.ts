import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheComponent } from './cache.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../layout/pipes/pipes.module';
import { CacheViewModalComponent } from './cache-view-modal/cache-view-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CacheCreateModalComponent } from './cache-create-modal/cache-create-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CacheComponent, CacheViewModalComponent, CacheCreateModalComponent],
    imports: [
        CommonModule,
        PipesModule,
        MatDialogModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: CacheComponent }])
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class CacheModule { }
