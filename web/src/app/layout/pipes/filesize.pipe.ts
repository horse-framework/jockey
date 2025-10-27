import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filesize',
    standalone: false
})
export class FilesizePipe implements PipeTransform {

    transform(value: number): string {

        if (value == 0)
            return 'None';

        if (value < 2014)
            return value + ' bytes';

        if (value < 1048576)
            return (value / 1024).toFixed(2) + ' KB';

        if (value > 1073741824)
            return (value / 1073741824).toFixed(2) + ' GB'

        return (value / 1048576).toFixed(2) + ' MB';
    }

}
