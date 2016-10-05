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
    selectedCar: Car;
    newCar: Car = new Car();

    constructor(private carService: CarService) { }

    ngOnInit(): void {
        this.getCars();
    }

    getCars(): void {
        this.carService.getCars().then(cars => this.cars = cars);
    }

    onSelect(car: Car): void {
        this.selectedCar = car;
    }

    addCar(): void {
        this.cars.push(this.newCar);
        this.newCar = <Car>{};
    }
}
