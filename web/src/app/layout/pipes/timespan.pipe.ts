import { Pipe, PipeTransform } from '@angular/core';


const MIN = 60;
const HOUR = 60 * 60;
const DAY = 60 * 60 * 24;

@Pipe({
    name: 'timespan',
    standalone: false
})
export class TimespanPipe implements PipeTransform {

    transform(value: number, ref: number = 0): string {

        let totalSeconds = Math.round(value - ref);

        let days = 0;
        let hours = 0;
        let mins = 0;

        while (totalSeconds >= DAY) {
            days++;
            totalSeconds -= DAY;
        }

        while (totalSeconds >= HOUR) {
            hours++;
            totalSeconds -= HOUR;
        }

        while (totalSeconds >= MIN) {
            mins++;
            totalSeconds -= MIN;
        }

        let result = '';

        if (days > 0) {
            result += days + ' ' + (days > 1 ? 'days' : 'day') + ' ';
        }

        if (hours > 0) {
            result += hours + ' ' + (hours > 1 ? 'hours' : 'hour') + ' ';
        }

        if (mins > 0) {
            result += mins + ' ' + (mins > 1 ? 'mins' : 'min') + ' ';
        }

        if (totalSeconds > 0) {
            result += totalSeconds + ' ' + (totalSeconds > 1 ? 'secs' : 'sec');
        }

        return result;
    }
}
