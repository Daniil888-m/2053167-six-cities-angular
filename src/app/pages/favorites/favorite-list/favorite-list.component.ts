import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { Offer } from '../../../mocks/offers';
import { getUniqueCities } from '../../../utils/utils';
import { OffersListComponent } from '../../../offers-list/offers-list.component';

@Component({
  selector: 'app-favorite-list',
  imports: [OffersListComponent],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteListComponent {
  public offers = input.required<Offer[]>();

  public uniqueCitites = computed(() => getUniqueCities(this.offers()));

  public getOfferByCity = (city: string) => {
    return this.offers().filter((offer) => offer.city.name === city);
  };
}
