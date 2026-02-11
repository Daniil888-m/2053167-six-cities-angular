import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CurrentFilterService } from '../../services/filter/filter.service';
import { FilterOption } from '../../services/shared/filters.model';

@Component({
  selector: 'app-option-list',
  imports: [],
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionListComponent {
  public activeFilterService = inject(CurrentFilterService);
  public filterOptions = FilterOption;
  public activeFilter = signal<FilterOption>(FilterOption.Default);

  constructor() {
    this.activeFilterService.currentSort$.subscribe((filterData) => {
      this.activeFilter.set(filterData.filter);
    });
  }

  public setFilter(updateFilter: FilterOption) {
    this.activeFilterService.setSortType(updateFilter);
  }
}
