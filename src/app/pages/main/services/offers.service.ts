import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Offer,
  RequestRoute,
  RequestStatus,
} from '../../../common/types/types';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private http = inject(HttpClient);
  public status = RequestStatus.Idle;
  public offers$?: Observable<Offer[]>;
  public fetchOffers$ = (): Observable<Offer[]> => {
    if (!this.offers$) {
      this.offers$ = this.http
        .get<Offer[]>(RequestRoute.Offers)
        .pipe(shareReplay(1));
    }

    return this.offers$;
  };
}
