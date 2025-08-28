import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  provideAppInitializer,
  inject,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideStore, Store } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { offerReducer } from './store/offer/offer.reducer';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './common/services/auth.interceptor';
import { LoginEffects } from './store/user/user.effects';
import { appInit } from './store/user/user.actions';
import { userReducer } from './store/user/user.reducer';
import { OfferEffects } from './store/offer/offer.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ fullOffer: offerReducer, user: userReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([LoginEffects, OfferEffects]),
    provideRouterStore(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAppInitializer(() => {
      const store = inject(Store);

      store.dispatch(appInit());
    }),
  ],
};
