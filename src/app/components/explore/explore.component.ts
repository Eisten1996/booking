import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { LightRestaurant } from 'src/app/shared/models/light-restaurant-models';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  restaurants: LightRestaurant[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAllRestaurantsMock().subscribe((result: any) => {
      console.log(result);

      this.restaurants = result;
    });
  }
}
