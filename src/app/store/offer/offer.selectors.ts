import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OfferState } from './offer.model';

export const getOfferFeature = createFeatureSelector<OfferState>('fullOffer');

export const getReviews = createSelector(
  getOfferFeature,
  (state) => state.reviews.entities
);

export const getNearbyOffers = createSelector(
  getOfferFeature,
  (state) => state.nearbyOffers.entities
);

export const getOfferData = createSelector(
  getOfferFeature,
  (state) => state.offer
);

export const getOfferStatus = createSelector(
  getOfferFeature,
  (state) => state.status
);
