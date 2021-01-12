import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExploreComponent } from './components/explore/explore.component';
import { BookingComponent } from './components/booking/booking.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoDialogComponent } from './shared/dialogs/info-dialog/info-dialog.component';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgxStripeModule } from 'ngx-stripe';

const appRoutes: Routes = [
  { path: '', component: ExploreComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'cancel', component: CancelBookingComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    CancelBookingComponent,
    HeaderComponent,
    ExploreComponent,
    InfoDialogComponent,
    BookingFormComponent,
    PaymentComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatStepperModule,
    NgbModule,
    NgxStripeModule.forRoot(
      'pk_test_51I380WGEXPxp8XoLvp0dgaHlrlzvAYTUE4XnwgU3htKCzlmUbjaqb8CPOrvosnd6HiIO9oJAjYNCZqgKDMq3VIli00bnoJcX0d'
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
