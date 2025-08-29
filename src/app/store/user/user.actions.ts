import { createAction, props } from '@ngrx/store';
import { Offer } from '../../mocks/offers';
import { UserInfo } from '../../common/types/types';

export const checkLogin = createAction('[User] check user authorization');
export const login = createAction(
  '[User] login with user data',
  props<{ email: string; password: string }>()
);

export const setFavorites = createAction(
  '[User] set favorites',
  props<{ favorites: Offer[] }>()
);

export const setUserInfo = createAction(
  '[User] set user info',
  props<UserInfo>()
);

export const setUserNoAuth = createAction(
  '[User] set user authorization status to not authorized'
);

export const appInit = createAction('[User] start loading user data');
