import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExercise } from 'src/app/_models/Exercises';
import { environment } from 'src/environments/environment';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Basic ${localStorage.getItem('token')}`,
};

@Injectable({
  providedIn: 'root',
})
export class YogaService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getYoga() {
    return this.http.get<IExercise[]>(this.API_URL + '/api/v1/yoga', {
      headers,
    });
  }
}
