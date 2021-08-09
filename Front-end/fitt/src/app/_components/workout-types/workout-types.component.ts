import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './workout-types.component.html',
  styleUrls: ['./workout-types.component.css'],
})
export class WorkoutTypesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  filter = 'Search..';
}
