import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ActiveCardService {
  current$: Subject<string>;

  constructor() {
    this.current$ = new Subject();
  }

  setActiveOffer = (newOfferId: string) => {
    this.current$.next(newOfferId);
  };
}
