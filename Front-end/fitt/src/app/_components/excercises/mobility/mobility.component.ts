import { MobilityService } from './../../../_services/mobility/mobility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css'],
})
export class MobilityComponent implements OnInit {
  public MobilityData: any;

  constructor(private MobilityService: MobilityService) {}

  ngOnInit() {
    this.getMobility();
  }

  getMobility() {
    const subscription = this.MobilityService.getMobility().subscribe(
      (data) => {
        this.MobilityData = data;
      },
      (err) => console.error(err),
      () => console.log('Mobility data loaded')
    );
    subscription.unsubscribe();
  }
}
