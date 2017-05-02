import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'position' })
export class PositionPipe implements PipeTransform {
    transform(index: number): string {
        var position = '';

        if (index.toString().match(/^(11|12|13)$/)) {
            position = index + 'th';
        }
        else if (index.toString().match(/\d*1$/)) {
            position = index + 'st';
        }
        else if (index.toString().match(/\d*2$/)) {
            position = index + 'nd';
        }
        else if (index.toString().match(/\d*3$/)) {
            position = index + 'rd';
        }
        else {
            position = index + 'th';
        }

        return position;
    }
}