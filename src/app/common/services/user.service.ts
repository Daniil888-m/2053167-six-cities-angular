import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginData, Offer, RequestRoute, UserInfo } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  public checklogin$(): Observable<UserInfo> {
    return this.http.get<UserInfo>(RequestRoute.Login);
  }

  public login$(data: LoginData): Observable<UserInfo> {
    return this.http.post<UserInfo>(RequestRoute.Login, data);
  }
  public logout$(): Observable<UserInfo> {
    return this.http.delete<UserInfo>(RequestRoute.Logout);
  }

  public fetchFavorites$(): Observable<Offer[]> {
    return this.http.get<Offer[]>(RequestRoute.Favorites);
  }

  public addFavorite$(offerId: string): Observable<Offer> {
    return this.http.post<Offer>(
      `${RequestRoute.Favorites}/${offerId}/1`,
      null
    );
  }

  public removeFavorite$(offerId: string): Observable<Offer> {
    return this.http.post<Offer>(
      `${RequestRoute.Favorites}/${offerId}/0`,
      null
    );
  }
}
