import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}

  makePayment(paymentData): Observable<any> {
    const response = {
      status: 'success',
      message: 'Payment processed successfully!',
    };
    return of(new HttpResponse({ status: 200, body: response }));
  }
}
