import { Component, OnInit } from '@angular/core';
import { AllService } from './../../../_services/all/all.service';

@Component({
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  public AllData: any;

  constructor(private AllService: AllService) {}

  ngOnInit() {
    this.AllService.getAllData().subscribe((data) => (this.AllData = data));
  }
}
