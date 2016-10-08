import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
    transform(time: number): string {
        var date = new Date(time);

        return (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
    }
}

@Pipe({name: 'timeDuration'})
export class TimeDurationPipe implements PipeTransform {
    transform(time: number): string {
        var oneSecond = 1000;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;

        var seconds = Math.floor((time % oneMinute) / oneSecond);
        var minutes = Math.floor((time % oneHour) / oneMinute);
        var hours = Math.floor((time % oneDay) / oneHour);
        var days = Math.floor(time / oneDay);

        var timeString = '';
        if (days !== 0) {
            timeString += days + 'd ';
        }
        if (hours !== 0) {
            timeString += hours + 'h ';
        }
        if (minutes !== 0) {
            timeString += minutes + 'm ';
        }
        if (seconds !== 0 || time < 1000) {
            timeString += seconds + 's ';
        }

        return timeString;
    }
}