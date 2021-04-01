import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimespanPipe } from './timespan.pipe';
import { UnlimitedPipe } from './unlimited.pipe';
import { FilesizePipe } from './filesize.pipe';

@NgModule({
    declarations: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe
    ]
})
export class PipesModule { }
