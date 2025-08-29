import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addReview,
  addReviewSuccess,
  loadOfferDetails,
  setOfferDetailsFailed,
  setOfferDetailsSuccess,
} from './offer.actions';
import {
  catchError,
  EMPTY,
  exhaustMap,
  forkJoin,
  map,
  of,
  switchMap,
} from 'rxjs';
import { OfferService } from '../../common/services/offer.service';
import { OfferFull } from '../../mocks/offer';
import { Offer } from '../../mocks/offers';
import { ReviewType } from '../../mocks/reviews';

Injectable();
export class OfferEffects {
  private actions$ = inject(Actions);
  private offerService = inject(OfferService);

  loadOfferDetailed$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadOfferDetails),
      switchMap(({ offerId }) =>
        forkJoin({
          offer: this.offerService.offer$(offerId),
          nearbyOffers: this.offerService.nearbyOffers$(offerId),
          reviews: this.offerService.reviews$(offerId),
        }).pipe(
          map(
            (data: {
              offer: OfferFull;
              nearbyOffers: Offer[];
              reviews: ReviewType[];
            }) => setOfferDetailsSuccess(data)
          ),
          catchError(() => of(setOfferDetailsFailed()))
        )
      )
    );
  });

  addReviewEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addReview),
      exhaustMap(({ review, offerId }) =>
        this.offerService.addReview$(review, offerId).pipe(
          map((newReview: ReviewType) => {
            return addReviewSuccess({ review: newReview });
          }),
          catchError(() => {
            return EMPTY;
          })
        )
      )
    );
  });
}
