import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSendingService {
  public isDataSending$: BehaviorSubject<boolean>;

  constructor() {
    this.isDataSending$ = new BehaviorSubject(false);
  }

  public setDataSending() {
    this.isDataSending$.next(true);
  }
  public setDataNotSending() {
    this.isDataSending$.next(false);
  }
}
