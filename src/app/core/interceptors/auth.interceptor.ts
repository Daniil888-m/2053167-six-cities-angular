import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../../common/services/token.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  const token = tokenService.getToken();
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-Token', token),
  });
  return next(reqWithHeader).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401 && tokenService.getToken()) {
        tokenService.dropToken();
        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );
};
