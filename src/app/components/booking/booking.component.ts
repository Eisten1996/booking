import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Restaurant } from 'src/app/shared/models/restaurant-models';
import { BookingFormComponent } from './booking-form/booking-form.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  @ViewChild(BookingFormComponent) bookingForm: BookingFormComponent;

  restaurant: Restaurant;
  private idRestaurant: number;

  constructor(
    private service: AppService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurant();
  }

  getRestaurant() {
    this.service.getRestaurant(this.idRestaurant).subscribe((result: any) => {
      this.bookingForm.restaurant = result.data;
      this.restaurant = result.data;
    });
  }
}
