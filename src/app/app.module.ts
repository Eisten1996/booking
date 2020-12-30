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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ExploreComponent } from './components/explore/explore.component';
import { BookingComponent } from './components/booking/booking.component';
import { CancelBookingComponent } from './components/cancel-booking/cancel-booking.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoDialogComponent } from './shared/dialogs/info-dialog/info-dialog.component';
import { BookingFormComponent } from './components/booking/booking-form/booking-form.component';

const appRoutes: Routes = [
  { path: '', component: ExploreComponent },
  { path: 'booking/:id', component: BookingComponent },
  { path: 'cancel', component: CancelBookingComponent },
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
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
