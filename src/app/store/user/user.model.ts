import { AuthStatus } from '../../common/types/types';
import { Offer } from '../../mocks/offers';
import { EntityState } from '@ngrx/entity';

export interface UserState {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  authStatus: AuthStatus;
  favoritesOffers: EntityState<Offer>;
}
