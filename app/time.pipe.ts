import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'time'})
export class TimePipe implements PipeTransform {
    transform(time: number): string {
        var date = new Date(time);

        return (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':' + (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes());
    }
}