import { MobilityService } from './../../../_services/mobility/mobility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './mobility.component.html',
  styleUrls: ['./mobility.component.css'],
})
export class MobilityComponent implements OnInit {
  public MobilityData: any;
  public searchValue: string;

  constructor(private MobilityService: MobilityService) {}

  ngOnInit() {
    this.MobilityService.getMobility().subscribe(
      (data) => (this.MobilityData = data)
    );
  }
}
