import { AllService } from './../../../_services/all/all.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  public AllData: any;

  constructor(private AllService: AllService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const subscription = this.AllService.getAll().subscribe(
      (data) => {
        this.AllData = data;
      },
      (err) => console.error(err),
      () => console.log('All data loaded')
    );
    subscription.unsubscribe();
  }
}
