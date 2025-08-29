import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer, OfferFull, RequestRoute, ReviewType } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private http = inject(HttpClient);

  offer$ = (offerId: string): Observable<OfferFull> =>
    this.http.get<OfferFull>(`${RequestRoute.Offers}/${offerId}`);
  nearbyOffers$ = (offerId: string): Observable<Offer[]> =>
    this.http.get<Offer[]>(`${RequestRoute.Offers}/${offerId}/nearby`);
  reviews$ = (offerId: string): Observable<ReviewType[]> =>
    this.http.get<ReviewType[]>(`${RequestRoute.Comments}/${offerId}`);
}
