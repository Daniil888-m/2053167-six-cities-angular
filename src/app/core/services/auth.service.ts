import { Injectable } from '@angular/core';
import { AuthorizationStatus } from '../../common/consts';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  _authorizationStatus = AuthorizationStatus.Auth;

  getStatus() {
    return this._authorizationStatus;
  }
}
