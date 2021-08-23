import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMeals } from 'src/app/_models/Meals';
import { environment } from 'src/environments/environment';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class LunchService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getLunch() {
    return this.http.get<IMeals[]>(this.API_URL + '/api/v1/lunch', {
      headers,
    });
  }
}
