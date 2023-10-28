import { DatePipe } from "@angular/common";

export class DateHelper {

    private static _pipe: DatePipe = new DatePipe('en-US');

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
        return this._pipe.transform(date, 'HH:mm:ss');
    }

}