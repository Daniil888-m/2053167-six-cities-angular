import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OfferState } from './offer.model';
import { nearbyOffersAdapter, reviewsAdapter } from './offer.reducer';

export const getOfferFeature = createFeatureSelector<OfferState>('fullOffer');

export const getReviewsState = createSelector(
  getOfferFeature,
  (state: OfferState) => state.reviews
);

export const getNearbyOffersState = createSelector(
  getOfferFeature,
  (state: OfferState) => state.nearbyOffers
);

export const { selectAll: getReviews } =
  reviewsAdapter.getSelectors(getReviewsState);

export const { selectAll: getNearbyOffers } =
  nearbyOffersAdapter.getSelectors(getNearbyOffersState);

export const getOfferData = createSelector(
  getOfferFeature,
  (state) => state.offer
);

export const getOfferStatus = createSelector(
  getOfferFeature,
  (state) => state.status
);

// export const getReviews = createSelector(getOfferFeature, (state) => {
//   selectReviews(state.reviews);
// });
// export const getNearbyOffers = createSelector(getOfferFeature, (state) => {
//   selectNearbyOffers(state.nearbyOffers);
// });
