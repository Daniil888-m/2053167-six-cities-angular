import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Offer, RequestRoute } from '../../../common/types/types';
import { Observable } from 'rxjs';

@Injectable()
export class OffersService {
  private http = inject(HttpClient);
  public fetchOffers$ = (): Observable<Offer[]> => {
    return this.http.get<Offer[]>(RequestRoute.Offers);
  };
}
