import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';

export const getUserFeature = createFeatureSelector<UserState>('user');
export const getUserFavorites = createSelector(
  getUserFeature,
  (state: UserState) => state.favoritesOffers.entities
);
