import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'jockeyTime',
    standalone: false
})
export class JockeyTimePipe implements PipeTransform {

  constructor(private _datePipe: DatePipe) { }

  transform(value: number): string {
    return this._datePipe.transform(value * 1000, 'HH:mm:ss');
  }
}
