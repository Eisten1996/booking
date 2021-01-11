import { Booking } from './booking-models';
export class Booked extends Booking {
  locator: String;
}

export interface PaymentIntent {
  description: String;
  price: Number;
}
