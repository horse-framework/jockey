import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandlersComponent } from './handlers.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [HandlersComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: HandlersComponent }])
    ]
})
export class HandlersModule { }
