import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from 'src/app/shared/dialogs/info-dialog/info-dialog.component';
import { AppService } from './../../../services/app.service';
import { Booking } from './../../../shared/models/booking-models';
import { Restaurant } from './../../../shared/models/restaurant-models';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss'],
})
export class BookingFormComponent implements OnInit {
  bookingForm;
  @Input() restaurant: Restaurant;
  booking = new Booking();

  constructor(
    private fb: FormBuilder,
    private service: AppService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
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

  setBooking() {
    this.booking.restaurantId = this.restaurant.id;
    this.booking.turnId = this.bookingForm.get('time').value;
    this.booking.date = this.bookingForm.get('date').value;
    this.booking.person = this.bookingForm.get('customers').value;
    this.booking.email = this.bookingForm.get('email').value;
    this.booking.name = this.bookingForm.get('name').value;
    this.booking.price = this.restaurant.price;
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

  initForm() {
    this.bookingForm = this.fb.group({
      date: [new Date(), Validators.required],
      time: ['', Validators.required],
      customers: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
    });
  }
}
