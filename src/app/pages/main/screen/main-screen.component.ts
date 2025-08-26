import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { Offer, offersMock } from '../../../mocks/offers';
import { OffersListComponent } from '../../../common/components/offers-list/offers-list.component';
import { ActiveCardService } from '../services/active-card.service';
import { Subject, takeUntil } from 'rxjs';
import { MapComponent } from '../../../common/components/map/map.component';
import { ActiveCityService } from '../../../common/services/active-city.service';
import { CitiesList, DEFAULT_ACTIVE_CITY } from '../../../common/consts';
import { filterByCity } from '../../../utils/utils';

@Component({
  selector: 'app-main-screen',
  imports: [OffersListComponent, MapComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ActiveCardService],
})
export class MainScreenComponent implements OnDestroy {
  public Cities = CitiesList;
  private activeOfferService = inject(ActiveCardService);
  private activeCityService = inject(ActiveCityService);

  public activeOffer = signal<Offer | null>(null);
  onCityClick = (newCityName: CitiesList) => {
    this.activeCityService.changeActiveCity(newCityName);
  };

  public activeCity = signal<CitiesList>(DEFAULT_ACTIVE_CITY);
  public activeCityOffers = computed(() =>
    filterByCity(this.items, this.activeCity())
  );

  public items: Offer[];
  private destroy$ = new Subject<void>();

  constructor() {
    this.items = offersMock;

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
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
