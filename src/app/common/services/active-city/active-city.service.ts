import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CitiesList, DEFAULT_ACTIVE_CITY } from './active-city.model';

@Injectable({
  providedIn: 'root',
})
export class ActiveCityService {
  public current$ = new BehaviorSubject<CitiesList>(DEFAULT_ACTIVE_CITY);

  public changeActiveCity(newCityName: CitiesList) {
    this.current$.next(newCityName);
  }
}
