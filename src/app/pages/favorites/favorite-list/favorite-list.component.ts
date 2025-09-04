import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { getUniqueCities } from '../../../utils/utils';
import { OffersListComponent } from '../../../common/components/offers-list/offers-list.component';
import { Offer } from '../../../common/types/types';

@Component({
  selector: 'app-favorite-list',
  imports: [OffersListComponent],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteListComponent {
  public offers = input.required<Offer[]>();

  public uniqueCitites = computed(() => getUniqueCities(this.offers()).sort());

  public getOfferByCity = (city: string) => {
    return this.offers().filter((offer) => offer.city.name === city);
  };
}
