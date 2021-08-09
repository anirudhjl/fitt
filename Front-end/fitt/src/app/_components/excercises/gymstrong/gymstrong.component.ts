import { GymStrongService } from './../../../_services/gymStrong/gym-strong.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './gymstrong.component.html',
  styleUrls: ['./gymstrong.component.css'],
})
export class GymstrongComponent implements OnInit {
  public GymStrongData: any;

  constructor(private GymStrongService: GymStrongService) {}

  ngOnInit() {
    this.getGymStrong();
  }

  getGymStrong() {
    const subscription = this.GymStrongService.getGymStrong().subscribe(
      (data) => {
        this.GymStrongData = data;
      },
      (err) => console.error(err),
      () => console.log('Gym Strong data loaded')
    );
    subscription.unsubscribe();
  }
}
