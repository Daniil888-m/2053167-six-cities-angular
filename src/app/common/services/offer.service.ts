import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer, OfferFull, RequestRoute, ReviewType } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  private http = inject(HttpClient);

  public offer$(offerId: string): Observable<OfferFull> {
    return this.http.get<OfferFull>(`${RequestRoute.Offers}/${offerId}`);
  }
  public nearbyOffers$(offerId: string): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${RequestRoute.Offers}/${offerId}/nearby`);
  }
  public reviews$(offerId: string): Observable<ReviewType[]> {
    return this.http.get<ReviewType[]>(`${RequestRoute.Comments}/${offerId}`);
  }
}
