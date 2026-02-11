import { EntityState } from '@ngrx/entity';
import {
  Offer,
  OfferFull,
  RequestStatus,
  ReviewType,
} from '../../common/types/types';

export interface OfferState {
  offer: OfferFull | null;
  nearbyOffers: EntityState<Offer>;
  reviews: EntityState<ReviewType>;
  status: RequestStatus;
}

export function sortByDate(a: ReviewType, b: ReviewType): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
