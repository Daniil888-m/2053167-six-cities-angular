import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Offer } from '../../../common/types/types';

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
