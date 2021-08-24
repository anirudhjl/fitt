import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.css'],
})
export class WorkoutPlansComponent implements OnInit {
  token = atob(localStorage.getItem('token') || '');
  username = this.token?.split(':')[0];
  href: string;

  constructor() {}

  ngOnInit(): void {}

  sendMail() {
    const mailto: string =
      'mailto:' +
      this.username +
      '?subject=FITT%20reminder%20&body=Hi,%0d%0aJust%20a%20friendly%20reminder%20to%20workout%20and%20stay%20fit.';
    window.location.href = mailto;
  }
}
