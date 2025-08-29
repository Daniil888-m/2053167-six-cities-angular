import { Injectable } from '@angular/core';
import { AuthStatus } from '../../common/types/types';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  _authorizationStatus = AuthStatus.Auth;

  public getStatus() {
    return this._authorizationStatus;
  }

  public get isAuthorized() {
    return this._authorizationStatus === AuthStatus.Auth;
  }
}
