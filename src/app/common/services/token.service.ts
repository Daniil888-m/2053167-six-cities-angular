import { Injectable } from '@angular/core';
import { LOGIN_TOKEN_NAME } from '../consts';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public setToken(token: string): void {
    localStorage.setItem(LOGIN_TOKEN_NAME, token);
  }

  public getToken(): string {
    const token = localStorage.getItem(LOGIN_TOKEN_NAME);
    return token ? token : '';
  }

  public dropToken(): void {
    localStorage.removeItem(LOGIN_TOKEN_NAME);
  }
}
