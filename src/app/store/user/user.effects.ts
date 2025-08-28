import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  appInit,
  checkLogin,
  login,
  setUserAuthStatus,
  setUserInfo,
} from './user.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LoginService } from '../../common/services/login.service';
import { AuthStatus, LoginData, UserInfo } from '../../common/types/types';

@Injectable()
export class LoginEffects {
  private actions$ = inject(Actions);
  private loginService = inject(LoginService);

  checkLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(checkLogin),
      exhaustMap(() => {
        return this.loginService.checklogin$().pipe(
          map(() => setUserAuthStatus({ status: AuthStatus.Auth })),
          catchError(() => of(setUserAuthStatus({ status: AuthStatus.NoAuth })))
        );
      })
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      exhaustMap((data: LoginData) => {
        return this.loginService.login$(data).pipe(
          map((userInfo: UserInfo) => setUserInfo(userInfo)),
          catchError(() => of(setUserAuthStatus({ status: AuthStatus.NoAuth })))
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
