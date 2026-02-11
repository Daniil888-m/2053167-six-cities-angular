import { createAction, props } from '@ngrx/store';
import { Offer, UserInfo } from '../../common/types/types';

export const checkLogin = createAction('[User] check user authorization');
export const login = createAction(
  '[User] login with user data',
  props<{ email: string; password: string }>()
);

export const setFavorites = createAction(
  '[User] set favorites',
  props<{ favorites: Offer[] }>()
);
export const addFavorite = createAction(
  '[User] fetch to add favorite',
  props<{ favoriteId: string }>()
);
export const addFavoriteSuccess = createAction(
  '[User] add favorite success',
  props<{ offer: Offer }>()
);
export const removeFavorite = createAction(
  '[User] fetch to remove favorite',
  props<{ favoriteId: string }>()
);
export const removeFavoriteSuccess = createAction(
  '[User] remove favorite success',
  props<{ offer: Offer }>()
);

export const setUserInfo = createAction(
  '[User] set user info',
  props<UserInfo>()
);

export const setUserNoAuth = createAction(
  '[User] set user authorization status to not authorized'
);
export const logout = createAction('[User] logout');
export const resetUserData = createAction('[User] reset user data');

export const appInit = createAction('[User] start loading user data');
