import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Offer,
  RequestRoute,
  RequestStatus,
} from '../../../common/types/types';
import { catchError, EMPTY, Observable, shareReplay } from 'rxjs';
import { ToastifyService } from '../../../common/services/toastify/toastify.service';
import { ErrorText } from '../../../common/consts';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  private http = inject(HttpClient);
  private toastifyService = inject(ToastifyService);
  public status = RequestStatus.Idle;
  public offers$?: Observable<Offer[]>;
  public fetchOffers$ = (): Observable<Offer[]> => {
    if (!this.offers$) {
      this.offers$ = this.http
        .get<Offer[]>(RequestRoute.Offers)
        .pipe(shareReplay(1));
      catchError(() => {
        this.toastifyService.showToast(ErrorText.offers);
        this.status = RequestStatus.Failed;
        return EMPTY;
      });
    }

    return this.offers$;
  };
}
