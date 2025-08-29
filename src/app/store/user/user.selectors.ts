import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.model';
import { favoritesAdapter } from './user.reducer';

export const getUserFeature = createFeatureSelector<UserState>('user');

export const getUserStatus = createSelector(
  getUserFeature,
  (state: UserState) => state.authStatus
);

const getUserFavoritesState = createSelector(
  getUserFeature,
  (state: UserState) => state.favoritesOffers
);

export const { selectAll: selectUserFavorites } = favoritesAdapter.getSelectors(
  getUserFavoritesState
);
