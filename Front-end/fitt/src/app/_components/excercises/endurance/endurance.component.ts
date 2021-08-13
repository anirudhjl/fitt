import { Component, OnInit } from '@angular/core';
import { EnduranceService } from './../../../_services/endurance/endurance.service';

@Component({
  templateUrl: './endurance.component.html',
  styleUrls: ['./endurance.component.css'],
})
export class EnduranceComponent implements OnInit {
  public EnduranceData: any;

  constructor(private EnduranceService: EnduranceService) {}

  ngOnInit() {
    this.EnduranceService.getEndurance().subscribe(
      (data) => (this.EnduranceData = data)
    );
  }
}
