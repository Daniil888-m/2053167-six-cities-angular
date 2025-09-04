import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { OfferComponent } from './pages/offer/offer.component';
import { NotFoundPageComponent } from './pages/not-found/not-found-page.component';
import { NoAuthGuard } from './core/route-guards/no-auth.guard';
import { AuthGuard } from './core/route-guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'offer/:id',
    component: OfferComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
