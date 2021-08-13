import { IMeals } from './../../_models/Meals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class BreakfastService {
  constructor(private http: HttpClient) {}

  getBreakfast() {
    return this.http.get<IMeals>('http://localhost:8080/api/v1/breakfast', {
      headers,
    });
  }
}
