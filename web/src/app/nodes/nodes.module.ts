import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodesComponent } from './nodes.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NodesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: NodesComponent }])
    ]
})
export class NodesModule { }
