import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutComponent } from './portal-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [PortalLayoutComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class PortalLayoutModule { }
