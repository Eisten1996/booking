import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RestaurantLight } from 'src/app/shared/models/restaurant-light-models';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  restaurants: RestaurantLight[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAllRestaurantsMock();
  }
}
