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

export const { selectAll: selectUserFavorites, selectEntities } =
  favoritesAdapter.getSelectors(getUserFavoritesState);

export const selectFavoriteById = (offerId: string) =>
  createSelector(
    getUserFavoritesState,
    selectEntities,
    (_, favorites) => favorites[offerId]
  );
