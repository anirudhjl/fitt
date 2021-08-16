import { GymStrongService } from './../../../_services/gymStrong/gym-strong.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './gymstrong.component.html',
  styleUrls: ['./gymstrong.component.css'],
})
export class GymstrongComponent implements OnInit {
  public GymStrongData: any;
  public searchValue: string;

  constructor(private GymStrongService: GymStrongService) {}

  ngOnInit() {
    this.GymStrongService.getGymStrong().subscribe(
      (data) => (this.GymStrongData = data)
    );
  }
}
