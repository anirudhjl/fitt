import { Component, OnInit } from '@angular/core';
import { BodyWeightService } from 'src/app/_services/bodyWeight/body-weight.service';

@Component({
  templateUrl: './bodyweight.component.html',
  styleUrls: ['./bodyweight.component.css'],
})
export class BodyweightComponent implements OnInit {
  public BodyWeightData: any;

  constructor(private BodyWeightService: BodyWeightService) {}

  ngOnInit() {
    this.getBodyWeight();
  }

  getBodyWeight() {
    const subscription = this.BodyWeightService.getBodyWeight().subscribe(
      (data) => {
        this.BodyWeightData = data;
      },
      (err) => console.error(err),
      () => console.log('Body Weight data loaded')
    );
    subscription.unsubscribe();
  }
}
