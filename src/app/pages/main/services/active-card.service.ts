import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Offer } from '../../../mocks/offers';

@Injectable()
export class ActiveCardService {
  current$: Subject<Offer | null>;

  constructor() {
    this.current$ = new Subject();
  }

  setActiveOffer = (newOfferId: Offer | null) => {
    this.current$.next(newOfferId);
  };
}
