import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExercise } from 'src/app/_models/Exercises';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class BodyWeightService {
  constructor(private http: HttpClient) {}

  getBodyWeight() {
    return this.http.get<IExercise[]>(
      'http://localhost:8080/api/v1/bodyweight',
      {
        headers,
      }
    );
  }
}
