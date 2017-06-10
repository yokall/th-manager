import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable()
export class CarService {
    private baseUrl = 'http://localhost:3000/api';

    constructor(private http: Http) {
    }

    getCars(): Observable<Car[]> {
        const cars = this.http
            .get(`${this.baseUrl}/cars`, { headers: this.getHeaders() })
            .map(mapCars);
        return cars;
    }

    save(car: Car): Observable<Response> {
        return this
            .http
            .post(`${this.baseUrl}/cars`, car, { headers: this.getHeaders() });
    }

    update(car: Car): Observable<Response> {
        console.log('Service car: ' + JSON.stringify(car));
        console.log(car._id);
        return this
            .http
            .put(`${this.baseUrl}/cars/${car._id}`, car, { headers: this.getHeaders() });
    }

    private getHeaders() {
        // I included these headers because otherwise FireFox
        // will request text/html instead of application/json
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
}

function mapCars(response: Response): Car[] {
    return response.json();
}
