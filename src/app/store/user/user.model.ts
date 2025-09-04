import { AuthStatus, Offer } from '../../common/types/types';
import { EntityState } from '@ngrx/entity';

export interface UserState {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  authStatus: AuthStatus;
  favoritesOffers: EntityState<Offer>;
}
