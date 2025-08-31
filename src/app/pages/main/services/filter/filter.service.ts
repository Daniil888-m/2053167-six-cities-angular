import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Offer } from '../../../../mocks/offers';
import { filterCompares, filterState } from './filter.model';
import { filterLabels, FilterOption } from '../shared/filters.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentFilterService {
  public initialItems?: Offer[];
  public sortedItems$ = new Subject<Offer[]>();
  public currentSort$ = new BehaviorSubject<filterState>({
    filter: FilterOption.Default,
    label: filterLabels[FilterOption.Default],
  });

  public setSortType(newSortType: FilterOption) {
    if (this.initialItems) {
      this.currentSort$.next({
        filter: newSortType,
        label: filterLabels[newSortType],
      });

      this.sortedItems$.next(filterCompares[newSortType](this.initialItems));
    }
  }

  public setItems(items: Offer[]) {
    this.initialItems = items;
    this.sortedItems$.next(this.initialItems);
  }

  public resetFilter() {
    this.currentSort$.next({
      filter: FilterOption.Default,
      label: filterLabels[FilterOption.Default],
    });

    this.sortedItems$.next(this.initialItems || []);
  }
}
