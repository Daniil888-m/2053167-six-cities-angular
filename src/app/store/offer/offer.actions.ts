import { createAction, props } from '@ngrx/store';
import { Offer, OfferFull, ReviewType } from '../../common/types/types';

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
  props<{ review: { comment: string; rating: number }; offerId: string }>()
);

export const addReviewSuccess = createAction(
  '[Reviews Component] add review success',
  props<{ review: ReviewType }>()
);

export const resetFormData = createAction('[Offer Component] reset form data');
