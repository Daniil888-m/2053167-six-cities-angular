import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  appInit,
  checkLogin,
  login,
  logout,
  resetUserData,
  setFavorites,
  setUserInfo,
  setUserNoAuth,
} from './user.actions';
import { catchError, concatMap, EMPTY, exhaustMap, map, of, tap } from 'rxjs';
import { UserService } from '../../common/services/user.service';
import { LoginData, UserInfo } from '../../common/types/types';
import { Offer } from '../../mocks/offers';
import { Router } from '@angular/router';
import { TokenService } from '../../common/services/token.service';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private tokenService = inject(TokenService);
  private router = inject(Router);

  checkLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkLogin),
      exhaustMap(() => {
        return this.userService.checklogin$().pipe(
          tap((userInfo: UserInfo) => {
            console.log('token isSet');
            this.tokenService.setToken(userInfo.token);
          }),
          map((userInfo: UserInfo) => setUserInfo(userInfo)),
          catchError(() => EMPTY)
        );
      })
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap(({ email, password }: LoginData) => {
        return this.userService.login$({ email, password }).pipe(
          tap((userInfo: UserInfo) => {
            this.router.navigate(['/']);
            this.tokenService.setToken(userInfo.token);
          }),
          map((userInfo: UserInfo) => setUserInfo(userInfo)),
          catchError(() => of(setUserNoAuth()))
        );
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      exhaustMap(() => {
        return this.userService.logout$().pipe(
          tap(() => {
            this.router.navigate(['/']);
            this.tokenService.dropToken();
          }),
          map(() => resetUserData()),
          catchError(() => of(setUserNoAuth()))
        );
      })
    );
  });

  getFavoritesAfterLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setUserInfo),
      concatMap(() =>
        this.userService.fetchFavorites$().pipe(
          map((favorites: Offer[]) => setFavorites({ favorites })),
          catchError(() => EMPTY)
        )
      )
    );
  });

  appInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appInit),
      map(() => checkLogin())
    );
  });
}
