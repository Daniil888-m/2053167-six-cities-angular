import { EntityState } from '@ngrx/entity';
import { Offer } from '../../mocks/offers';
import { ReviewType } from '../../mocks/reviews';
import { OfferFull } from '../../mocks/offer';
import { RequestStatus } from '../../common/types/types';

export interface OfferState {
  offer: OfferFull | null;
  nearbyOffers: EntityState<Offer>;
  reviews: EntityState<ReviewType>;
  status: RequestStatus;
}
