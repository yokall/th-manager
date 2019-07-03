import { Component } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
      .subscribe(cars => {
        this.cars = cars;
        this.sortCars();
      });
  }

  sortCars(): void {
    this.cars.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
      else if (a.score < b.score) {
        return 1;
      }
      else {
        if (a.time < b.time) {
          return -1;
        }
        else if (a.time > b.time) {
          return 1;
        }
        else {
          if (a.start_time < b.start_time) {
            return -1;
          }
          else if (a.start_time > b.start_time) {
            return 1;
          }
          else {
            return a.name.localeCompare(b.name);
          }
        }
      }
    });
  }

  addCar(): void {
    const car = this.newCar;
    car.start_time = new Date().valueOf();
    car.time = Number.MAX_VALUE;
    car.score = 0;

    this.carService
      .save(car)
      .subscribe(car => {
        this.cars.push(car);
        this.sortCars();
      });

    this.newCar = <Car>{};
  }

  carFinished(car: Car): void {
    car.finish_time = new Date().valueOf();
    car.time = car.finish_time - car.start_time.valueOf();

    this.carService
      .update(car)
      .subscribe(r => this.sortCars());
  }

  updateCar(car: Car): void {
    this.carService
      .update(car)
      .subscribe(r => this.sortCars());
  }
}
