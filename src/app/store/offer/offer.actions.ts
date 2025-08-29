import { createAction, props } from '@ngrx/store';
import { ReviewType } from '../../mocks/reviews';
import { Offer } from '../../mocks/offers';
import { OfferFull } from '../../mocks/offer';

export const setOfferDetailsSuccess = createAction(
  '[Offer Details API] Set Offer Details Success',
  props<{ offer: OfferFull; nearbyOffers: Offer[]; reviews: ReviewType[] }>()
);
export const setOfferDetailsFailed = createAction(
  '[Offer Details API] Set Offer Details Success'
);

export const loadOfferDetails = createAction(
  '[Offer Component] load full offer data',
  props<{ offerId: string }>()
);

export const addReview = createAction(
  '[Reviews Component] add review',
  props<{ review: ReviewType }>()
);

export const resetFormData = createAction('[Offer Component] reset form data');
