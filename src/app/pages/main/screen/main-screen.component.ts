import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { OffersListComponent } from '../../../common/components/offers-list/offers-list.component';
import { ActiveCardService } from '../services/active-card.service';
import { catchError, EMPTY, Subject, takeUntil } from 'rxjs';
import { MapComponent } from '../../../common/components/map/map.component';
import { filterByCity } from '../../../utils/utils';
import { OffersService } from '../services/offers/offers.service';
import { SpinnerComponent } from '../../../common/components/spinner/spinner.component';
import { EveryClickDirective } from '../directives/every-click-directive.directive';
import { CurrentFilterService } from '../services/filter/filter.service';
import { OptionListComponent } from '../components/option-list/option-list.component';
import { AsyncPipe } from '@angular/common';
import { ActiveCityService } from '../../../common/services/active-city/active-city.service';
import {
  CitiesList,
  DEFAULT_ACTIVE_CITY,
} from '../../../common/services/active-city/active-city.model';
import { Offer } from '../../../common/types/types';
import { ToastifyService } from '../../../common/services/toastify/toastify.service';
import { ErrorText } from '../../../common/consts';

@Component({
  selector: 'app-main-screen',
  imports: [
    OffersListComponent,
    MapComponent,
    SpinnerComponent,
    EveryClickDirective,
    OptionListComponent,
    AsyncPipe,
  ],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  providers: [ActiveCardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainScreenComponent implements OnDestroy {
  private activeOfferService = inject(ActiveCardService);
  private activeCityService = inject(ActiveCityService);
  private offersService = inject(OffersService);
  private initialItems = signal<Offer[]>([]);

  public Cities = CitiesList;
  private toastifyService = inject(ToastifyService);

  public activeFilterService = inject(CurrentFilterService);
  public isListVisible = signal(false);
  public isLoading = signal(true);
  public isFailed = signal(false);

  public activeOffer = signal<Offer | null>(null);
  public onCityClick = (newCityName: CitiesList): void => {
    this.activeCityService.changeActiveCity(newCityName);
  };

  public activeCity = signal<CitiesList>(DEFAULT_ACTIVE_CITY);
  public activeCityOffers = computed(() => {
    return filterByCity(this.initialItems(), this.activeCity());
  });

  public items = signal<Offer[]>([]);
  private destroy$ = new Subject<void>();

  @HostListener('keydown.enter') onEnterKeydown() {
    this.toggleList();
  }

  constructor() {
    this.activeFilterService.sortedItems$.subscribe((sortedItems) => {
      this.items.set(sortedItems);
    });

    this.offersService
      .fetchOffers$()
      .pipe(
        catchError(() => {
          this.toastifyService.showToast(ErrorText.offers);
          this.isLoading.set(false);
          this.isFailed.set(true);
          return EMPTY;
        })
      )
      .subscribe((offers: Offer[]) => {
        this.initialItems.set(offers);
        this.activeFilterService.setItems(this.activeCityOffers());
        this.isLoading.set(false);
      });

    this.activeOfferService.current$
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeOffer) => {
        this.activeOffer.set(activeOffer);
      });

    this.activeCityService.current$
      .asObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeCity) => {
        this.activeCity.set(activeCity);
        this.activeFilterService.setItems(this.activeCityOffers());
        this.activeFilterService.resetFilter();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public toggleList(): void {
    this.isListVisible.update((currentState) => !currentState);
  }
}
