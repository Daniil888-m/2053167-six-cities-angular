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
    console.log('data is Sending!!');

    this.isDataSending$.next(true);
  }
  public setDataNotSending() {
    console.log('dataNotSending');

    this.isDataSending$.next(false);
  }
}
