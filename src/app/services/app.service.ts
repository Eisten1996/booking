import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Booking } from '../shared/models/booking-models';
import { LightRestaurant } from '../shared/models/light-restaurant-models';

const API = 'http://localhost:8080/booking-restaurant/v1/';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAllRestaurants() {
    return this.http.get(API + 'restaurants');
  }

  createReservation(booking: Booking) {
    return this.http.post(API + 'reservation', booking);
  }

  cancelReservation(reservationCode: string) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
      }),
    };
    return this.http.delete(
      API + 'reservation?locator=' + reservationCode,
      options
    );
  }

  getAllRestaurantsMock() {
    const restaurants: LightRestaurant[] = [];
    let restaurant = new LightRestaurant();
    restaurant.address = 'av peru';
    restaurant.id = 1;
    restaurant.image =
      'https://cdn.pixabay.com/photo/2015/05/15/14/55/cafe-768771_960_720.jpg';
    restaurant.name = 'Restaurante de Dipper';

    const restaurant2: LightRestaurant = {
      address: 'av quilca',
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_960_720.jpg',
      name: 'Retsaurant de Eisten',
    };

    restaurants.push(restaurant);
    restaurants.push(restaurant2);
    return of(restaurants);
  }
}
