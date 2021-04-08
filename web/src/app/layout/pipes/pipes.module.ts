import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimespanPipe } from './timespan.pipe';
import { UnlimitedPipe } from './unlimited.pipe';
import { FilesizePipe } from './filesize.pipe';
import { BindingTypePipe } from './binding-type.pipe';

@NgModule({
    declarations: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe,
        BindingTypePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe,
        BindingTypePipe
    ]
})
export class PipesModule { }
