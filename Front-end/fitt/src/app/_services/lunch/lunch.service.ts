import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeals } from 'src/app/_models/Meals';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class LunchService {
  constructor(private http: HttpClient) {}

  getLunch() {
    return this.http.get<IMeals[]>('http://localhost:8080/api/v1/lunch', {
      headers,
    });
  }
}
