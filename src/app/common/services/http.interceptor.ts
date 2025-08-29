import { HttpInterceptorFn } from '@angular/common/http';
import {} from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const API_BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';
  const clonedReq = req.clone({
    url: `${API_BASE_URL}/${req.url}`,
  });

  return next(clonedReq);
};
