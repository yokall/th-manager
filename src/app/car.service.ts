// import { Headers, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { Car } from './car';
import { environment } from '../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CarService {
    private baseUrl = environment.db_conn_string;

    constructor(private http: HttpClient) {
    }

    getCars(): Observable<Car[]> {
        const cars = this.http
            .get<Car[]>(`${this.baseUrl}/cars`, httpOptions);
        return cars;
    }

    save(car: Car): Observable<Car> {
        return this
            .http
            .post<Car>(`${this.baseUrl}/cars`, car, httpOptions);
    }

    update(car: Car): Observable<any> {
        console.log('Service car: ' + JSON.stringify(car));
        console.log(car._id);
        return this
            .http
            .put(`${this.baseUrl}/cars/${car._id}`, car, httpOptions);
    }
}
