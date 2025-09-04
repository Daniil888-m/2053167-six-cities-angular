import { Injectable } from '@angular/core';

import { CitiesList } from '../../../common/services/active-city/active-city.model';

@Injectable()
export class RandomCityService {
  public lastCity?: CitiesList;

  getRandomCity(): string {
    const citiesToChooseFrom = [...Object.values(CitiesList)];

    if (this.lastCity) {
      const lastCityIndex = citiesToChooseFrom.indexOf(this.lastCity);
      if (lastCityIndex > -1) {
        citiesToChooseFrom.splice(lastCityIndex, 1);
      }
    }

    const randomIndex = Math.floor(Math.random() * citiesToChooseFrom.length);
    const newCity = citiesToChooseFrom[randomIndex];

    this.lastCity = newCity;

    return newCity;
  }
}
