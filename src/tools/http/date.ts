import moment from 'moment-timezone'

export class DateClass {

    public static getCurrentDatetimeString(): string {
        return moment().tz("Asia/Tehran").format("Y-M-D H:m:s");
    }
}