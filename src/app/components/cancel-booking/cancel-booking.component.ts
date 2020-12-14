import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-cancel-booking',
  templateUrl: './cancel-booking.component.html',
  styleUrls: ['./cancel-booking.component.scss'],
})
export class CancelBookingComponent implements OnInit {
  codeReservation: string = 'GAAAAAA';

  constructor(private service: AppService) {}

  ngOnInit(): void {}

  sendCancel() {
    this.service.cancelReservation(this.codeReservation);
    console.log(this.codeReservation);
  }
}
