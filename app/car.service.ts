import { Injectable } from '@angular/core';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {
    getCars(): Promise<Car[]> {
        var cars = CARS;

        var date = new Date();

        for (let car of cars) {
            car.startTime = date.valueOf() - Math.floor((Math.random() * 7200000) + 1800000);
        }

        return Promise.resolve(cars);
    }
}