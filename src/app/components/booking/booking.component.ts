import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { Booking } from 'src/app/shared/models/booking-models';
import { Restaurant } from 'src/app/shared/models/restaurant-models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  bookingForm;
  restaurant: Restaurant;
  booking = new Booking();
  private idRestaurant: number;

  constructor(
    private fb: FormBuilder,
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
      console.log(result.data);

      this.restaurant = result.data;
      console.log(this.restaurant);
    });
  }
}
