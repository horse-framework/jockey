import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BindingTypePipe } from './binding-type.pipe';
import { FilesizePipe } from './filesize.pipe';
import { JockeyTimePipe } from './jockey-time.pipe';
import { TimespanPipe } from './timespan.pipe';
import { UnlimitedPipe } from './unlimited.pipe';

@NgModule({
    declarations: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe,
        BindingTypePipe,
        JockeyTimePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TimespanPipe,
        UnlimitedPipe,
        FilesizePipe,
        BindingTypePipe,
        JockeyTimePipe
    ],
    providers: [
        DatePipe
    ]
})
export class PipesModule { }
