import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutComponent } from './portal-layout.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PortalLayoutComponent,
        ConfirmModalComponent
    ],
    exports: [
        ConfirmModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
        FormsModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PortalLayoutModule { }
