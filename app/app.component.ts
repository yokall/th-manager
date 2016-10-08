import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [CarService]
})
export class AppComponent {
    title = 'Treasure Hunt Manager';
    cars: Car[];
    sortedCars: Car[];
    newCar: Car = new Car();

    constructor(private carService: CarService) { }

    ngOnInit(): void {
        this.getCars();
    }

    getCars(): void {
        this.carService.getCars()
            .then(cars => {
                this.cars = cars;
                this.sortCars();
            });
    }

    sortCars(): void {
        this.cars.sort((a, b) => {
            if (a.time < b.time) {
                return -1;
            }
            else if (a.time > b.time) {
                return 1;
            }
            else {
                if (a.startTime < b.startTime) {
                    return -1;
                }
                else if (a.startTime > b.startTime) {
                    return 1;
                }
                else {
                    return a.name.localeCompare(b.name);
                }
            }
        });
    }

    addCar(): void {
        this.newCar.startTime = new Date().valueOf();
        this.newCar.time = Number.MAX_VALUE;

        this.cars.push(this.newCar);
        this.sortCars();
        this.newCar = <Car>{};
    }

    carFinished(car: Car): void {
        car.finishTime = new Date().valueOf();
        car.time = car.finishTime - car.startTime.valueOf();

        this.sortCars();
    }
}
