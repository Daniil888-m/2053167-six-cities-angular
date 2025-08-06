import { Injectable } from '@angular/core';
import { AuthorizationStatus } from '../../common/consts';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  _authorizationStatus = AuthorizationStatus.Unknown;

  public getStatus() {
    return this._authorizationStatus;
  }

  public get isAuthorized() {
    return this._authorizationStatus === AuthorizationStatus.Auth;
  }
}
