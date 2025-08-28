import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from './token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.getToken();
  const reqWithHeader = req.clone({
    headers: req.headers.set('X-Token', token),
  });
  return next(reqWithHeader);
};
