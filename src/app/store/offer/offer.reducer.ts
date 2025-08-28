import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ReviewType } from '../../mocks/reviews';
import { Offer } from '../../mocks/offers';
import { OfferState } from './offer.model';
import { RequestStatus } from '../../common/types/types';
import { createReducer, on } from '@ngrx/store';
import {
  addReview,
  resetFormData,
  setOfferDetailsSuccess,
} from './offer.actions';

export const reviewsAdapter: EntityAdapter<ReviewType> =
  createEntityAdapter<ReviewType>();
export const nearbyOffersAdapter: EntityAdapter<Offer> =
  createEntityAdapter<Offer>();

const initialState: OfferState = {
  offer: null,
  reviews: reviewsAdapter.getInitialState(),
  nearbyOffers: nearbyOffersAdapter.getInitialState(),
  status: RequestStatus.Idle,
};

export const offerReducer = createReducer(
  initialState,
  on(setOfferDetailsSuccess, (state, { reviews, nearbyOffers, offer }) => {
    return {
      nearbyOffers: nearbyOffersAdapter.setAll(
        nearbyOffers,
        state.nearbyOffers
      ),
      reviews: reviewsAdapter.setAll(reviews, state.reviews),
      offer,
      status: RequestStatus.Success,
    };
  }),
  on(addReview, (state, { review }) => {
    return {
      ...state,
      reviews: reviewsAdapter.addOne(review, state.reviews),
    };
  }),
  on(resetFormData, () => {
    return initialState;
  })
);
