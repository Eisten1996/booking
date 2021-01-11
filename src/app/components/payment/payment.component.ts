import { PaymentService } from './../../services/payment.service';
import { PaymentIntent, Booked } from './../../shared/models/payment-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions,
} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0',
        },
      },
    },
  };

  elementsOptions: StripeElementsOptions = {
    locale: 'es',
  };

  stripeTest: FormGroup;
  booked: Booked;

  constructor(
    private fb: FormBuilder,
    private stripeService: StripeService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.booked = this.paymentService.getBooked();
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  cancel() {}

  confirm() {}

  buy(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.getCard(), { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          const paymentIntent: PaymentIntent = {
            description: this.booked.name + ': ' + this.booked.locator,
            price: this.booked.price,
          };
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }
}
