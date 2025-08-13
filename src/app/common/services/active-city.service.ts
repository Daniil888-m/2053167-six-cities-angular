import { Injectable } from '@angular/core';
import { CitiesList, DEFAULT_ACTIVE_CITY } from '../consts';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActiveCityService {
  public current$ = new BehaviorSubject<CitiesList>(DEFAULT_ACTIVE_CITY);

  changeActiveCity(newCityName: CitiesList) {
    this.current$.next(newCityName);
  }
}
