import { DatePipe } from "@angular/common";

export class DateHelper {

    private static _pipe: DatePipe = new DatePipe('en-US');
    
    static findRangeDate(date: Date, rangeType: 'min' | 'hour' | 'day', value: number): Date {
        let diff = this.findRangeInMilliseconds(rangeType, value);
        let now = date.getTime();
        let time = now + diff;
        return new Date(time);
    }

    private static findRangeInMilliseconds(rangeType: 'min' | 'hour' | 'day', value: number): number {
        let unit = 60 * 1000;

        if (rangeType == 'hour')
            unit *= 60;

        else if (rangeType == 'day')
            unit *= 60 * 24;

        return unit * value;
    }

    /** Create Time Labels */
    static createTimeLabels(count: number, scaleSeconds: number, reverse: boolean): string[] {

        let labels = [];
        let seconds = new Date().getTime() / 1000;

        if (!reverse) {
            seconds -= scaleSeconds * count;
        }

        for (let i = 0; i < count; i++) {

            labels.push(this.findTimeFromUnixSeconds(seconds));

            if (reverse) { seconds -= scaleSeconds; }
            else { seconds += scaleSeconds; }
        }

        return labels;
    }

    /** Create Time Labels. Each time must be in unix seconds. */
    static createLabels(times: number[]): string[] {

        let labels = [];

        for (let i = 0; i < times.length; i++) {

            labels.push(this.findTimeFromUnixSeconds(times[i]));
        }

        return labels;
    }

    /** Returns HH:mm:ss string from unix time in seconds */
    static findTimeFromUnixSeconds(unix: number): string {
        let date = new Date(unix * 1000);
        return this._pipe.transform(date, 'HH:mm:ss')!;
    }
}