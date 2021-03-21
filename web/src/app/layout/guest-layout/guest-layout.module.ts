import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestLayoutComponent } from './guest-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [GuestLayoutComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class GuestLayoutModule { }
