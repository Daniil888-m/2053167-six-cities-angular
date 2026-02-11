import { Offer } from '../../../../common/types/types';
import { FilterOption } from '../shared/filters.model';

export interface filterState {
  filter: FilterOption;
  label: string;
}

export const filterCompares = {
  [FilterOption.Default]: (offers: Offer[]) => offers,
  [FilterOption.lowToHigh]: (offers: Offer[]) =>
    offers
      .slice()
      .sort(
        (firstOffer: Offer, secondOffer: Offer) =>
          firstOffer.price - secondOffer.price
      ),
  [FilterOption.highToLow]: (offers: Offer[]) =>
    offers
      .slice()
      .sort(
        (firstOffer: Offer, secondOffer: Offer) =>
          secondOffer.price - firstOffer.price
      ),
  [FilterOption.topRated]: (offers: Offer[]) =>
    offers
      .slice()
      .sort(
        (firstOffer: Offer, secondOffer: Offer) =>
          secondOffer.rating - firstOffer.rating
      ),
};
