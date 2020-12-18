import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/services/app.service';
import { InfoDialogComponent } from 'src/app/shared/dialogs/info-dialog/info-dialog.component';
import { Booking } from 'src/app/shared/models/booking-models';
import { LightRestaurant } from 'src/app/shared/models/light-restaurant-models';
import { Restaurant } from 'src/app/shared/models/restaurant-models';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  toppings = new FormControl();
  bookingForm;
  restaurant: Restaurant;
  booking = new Booking();
  private idRestaurant: number;

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor(
    private fb: FormBuilder,
    private service: AppService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.idRestaurant = Number(this.route.snapshot.paramMap.get('id'));
    this.getRestaurant();

    this.initForm();
  }

  initForm() {
    this.bookingForm = this.fb.group({
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
      customers: ['', Validators.required],
    });
  }

  getRestaurant() {
    this.service.getRestaurant(this.idRestaurant).subscribe((result: any) => {
      console.log(result.data);

      this.restaurant = result.data;
      console.log(this.restaurant);
    });
  }

  setBooking() {
    this.booking.restaurantId = this.idRestaurant;
    this.booking.turnId = this.bookingForm.get('time').value;
    this.booking.date = this.bookingForm.get('date').value;
    this.booking.person = this.bookingForm.get('customers').value;
  }
  sendBooking() {
    this.setBooking();
    this.service.createReservation(this.booking).subscribe((result: any) => {
      console.log(result.data);
      const title = 'Codigo de Reserva: ' + result.data;
      const info =
        'Necesitaras el codigo para poder acceder al restaurant o cancelar la reserva. Por favor guardalo';
      this.openDialog(title, info);
    });
  }

  openDialog(title: String, info: String): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      width: '250px',
      data: { title: title, info: info },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
