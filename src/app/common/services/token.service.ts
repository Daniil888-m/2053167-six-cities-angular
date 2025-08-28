import { Injectable } from '@angular/core';
import { LOGIN_TOKEN_NAME } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  setToken(token: string): void {
    localStorage.setItem(LOGIN_TOKEN_NAME, token);
  }

  getToken(): string {
    const token = localStorage.getItem(LOGIN_TOKEN_NAME);
    return token ? token : '';
  }

  dropToken(): void {
    localStorage.removeItem(LOGIN_TOKEN_NAME);
  }
}
