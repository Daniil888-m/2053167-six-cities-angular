import { createFeatureSelector } from '@ngrx/store';
import { userState } from './user.model';

export const getUserFeature = createFeatureSelector<userState>('user');
