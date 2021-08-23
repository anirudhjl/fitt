import { IMeals } from './../../_models/Meals';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class BreakfastService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getBreakfast() {
    return this.http.get<IMeals>(this.API_URL + '/api/v1/breakfast', {
      headers,
    });
  }
}
