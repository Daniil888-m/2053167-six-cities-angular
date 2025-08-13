import { CitiesList } from '../common/consts';
import { Offer } from '../mocks/offers';

export const getUniqueCities = (favoritesOffers: Offer[]) => {
  return favoritesOffers.reduce<string[]>((uniqueCities, offer) => {
    if (uniqueCities.indexOf(offer.city.name) === -1) {
      uniqueCities.push(offer.city.name);
    }
    return uniqueCities;
  }, []);
};

export const filterByCity = (offers: Offer[], activeCity: CitiesList) =>
  offers.filter((offer: Offer) => offer.city.name === activeCity);
