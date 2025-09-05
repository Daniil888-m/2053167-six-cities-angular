import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  addFavorite,
  addFavoriteSuccess,
  appInit,
  checkLogin,
  login,
  logout,
  removeFavorite,
  removeFavoriteSuccess,
  resetUserData,
  setFavorites,
  setUserInfo,
  setUserNoAuth,
} from './user.actions';
import { catchError, concatMap, EMPTY, exhaustMap, map, of, tap } from 'rxjs';
import { UserService } from '../../common/services/user.service';
import { LoginData, Offer, UserInfo } from '../../common/types/types';
import { Router } from '@angular/router';
import { TokenService } from '../../common/services/token.service';
import { ToastifyService } from '../../common/services/toastify/toastify.service';
import { ErrorText } from '../../common/consts';
import { DataSendingService } from '../../pages/login/services/data-sending.service';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  private tokenService = inject(TokenService);
  private dataSendingService = inject(DataSendingService);

  private toastifyService = inject(ToastifyService);
  private router = inject(Router);

  checkLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkLogin),
      exhaustMap(() => {
        return this.userService.checklogin$().pipe(
          tap((userInfo: UserInfo) => {
            this.tokenService.setToken(userInfo.token);
          }),
          map((userInfo: UserInfo) => setUserInfo(userInfo)),
          catchError(() => of(setUserNoAuth()))
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
            this.tokenService.setToken(userInfo.token);
            this.router.navigate(['/']);
          }),
          map((userInfo: UserInfo) => setUserInfo(userInfo)),
          catchError(() => {
            this.toastifyService.showToast(ErrorText.login);
            return of(setUserNoAuth());
          })
        );
      }),
      tap(() => {
        this.dataSendingService.setDataNotSending();
      })
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      exhaustMap(() => {
        return this.userService.logout$().pipe(
          map(() => resetUserData()),
          catchError(() => {
            this.toastifyService.showToast(ErrorText.logout);
            return of(setUserNoAuth());
          })
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
          catchError(() => {
            this.toastifyService.showToast(ErrorText.favorites);
            return EMPTY;
          })
        )
      )
    );
  });

  fetchAddFavorite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addFavorite),
      exhaustMap(({ favoriteId }) => {
        return this.userService.addFavorite$(favoriteId).pipe(
          map((offer) => addFavoriteSuccess({ offer })),
          catchError(() => {
            this.toastifyService.showToast(ErrorText.addFavorite);
            return EMPTY;
          })
        );
      })
    );
  });

  fetchRemoveFavorite$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removeFavorite),
      exhaustMap(({ favoriteId }) => {
        return this.userService.removeFavorite$(favoriteId).pipe(
          map((offer) => removeFavoriteSuccess({ offer })),
          catchError(() => {
            this.toastifyService.showToast(ErrorText.removeFavorite);
            return EMPTY;
          })
        );
      })
    );
  });

  appInit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appInit),
      map(() => checkLogin())
    );
  });
}
