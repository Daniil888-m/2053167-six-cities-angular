import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../../common/services/token.service';

export const NoAuthGuard: CanActivateFn = () => {
  const location = inject(Location);
  const tokenService = inject(TokenService);

  if (tokenService.getToken()) {
    location.back();
    console.log("no, you can't", tokenService.getToken());
    return false;
  }

  return true;
};
