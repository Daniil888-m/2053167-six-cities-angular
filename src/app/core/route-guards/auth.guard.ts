import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivateFn } from '@angular/router';

import { Store } from '@ngrx/store';
import { getUserStatus } from '../../store/user/user.selectors';
import { map, take } from 'rxjs';
import { AuthStatus } from '../../common/types/types';

export const AuthGuard: CanActivateFn = () => {
  const location = inject(Location);
  const store = inject(Store);

  return store.select(getUserStatus).pipe(
    take(1),
    map((authorizationStatus) => {
      if (authorizationStatus === AuthStatus.Auth) {
        return true;
      }
      location.back();
      return false;
    })
  );
};
