import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.model';
import { AuthStatus } from '../../common/types/types';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Offer } from '../../mocks/offers';
import {
  resetUserData,
  setFavorites,
  setUserInfo,
  setUserNoAuth,
} from './user.actions';

const favoritesAdapter: EntityAdapter<Offer> = createEntityAdapter<Offer>();

const initialState: UserState = {
  name: '',
  avatarUrl: '',
  isPro: false,
  email: '',
  authStatus: AuthStatus.Unknown,
  favoritesOffers: favoritesAdapter.getInitialState(),
};

export const userReducer = createReducer(
  initialState,
  on(setFavorites, (state, { favorites }) => {
    return {
      ...state,
      favoritesOffers: favoritesAdapter.setAll(
        favorites,
        state.favoritesOffers
      ),
    };
  }),
  on(setUserInfo, (state, { name, avatarUrl, isPro, email }) => {
    return {
      ...state,
      name,
      avatarUrl,
      isPro,
      email,
      authStatus: AuthStatus.Auth,
    };
  }),
  on(setUserNoAuth, (state) => {
    return {
      ...state,
      authStatus: AuthStatus.NoAuth,
    };
  }),
  on(resetUserData, () => {
    return {
      ...initialState,
      authStatus: AuthStatus.NoAuth,
    };
  })
);
