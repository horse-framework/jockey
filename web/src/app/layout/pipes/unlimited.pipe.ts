import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unlimited'
})
export class UnlimitedPipe implements PipeTransform {

    transform(value: number): string {

        if (value == 0)
            return 'Unlimited';

        return value.toString();
    }

}
