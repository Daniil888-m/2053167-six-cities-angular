import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginData, RequestRoute, UserInfo } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient);

  checklogin$() {
    return this.http.get(RequestRoute.Login);
  }

  login$(data: LoginData) {
    return this.http.post<UserInfo>(RequestRoute.Login, data);
  }
}
