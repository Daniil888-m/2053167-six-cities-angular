import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ReviewFormComponent } from '../components/review-form/review-form.component';
import { ReviewsListComponent } from '../components/reviews-list/reviews-list.component';
import { MapComponent } from '../../../common/components/map/map.component';
import { NearbyListComponent } from '../components/nearby-list/nearby-list.component';
import { ActiveCardService } from '../../main/services/active-card.service';
import { Store } from '@ngrx/store';
import {
  loadOfferDetails,
  resetFormData,
} from '../../../store/offer/offer.actions';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../../../common/components/spinner/spinner.component';
import {
  getOfferData,
  getNearbyOffers,
  getReviews,
} from '../../../store/offer/offer.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RatingPipe } from '../../../common/pipes/rating.pipe';
import { CapitalizePipe } from '../../../common/pipes/capitalize.pipe';
import { FavoriteItemDirective } from '../../../common/directives/favorite-item.directive';
import { TokenService } from '../../../common/services/token.service';
import { Offer, OfferFull, ReviewType } from '../../../common/types/types';

@Component({
  selector: 'app-offer-screen',
  imports: [
    ReviewFormComponent,
    ReviewsListComponent,
    MapComponent,
    NearbyListComponent,
    SpinnerComponent,
    AsyncPipe,
    RatingPipe,
    CapitalizePipe,
    FavoriteItemDirective,
  ],
  templateUrl: './offer-screen.component.html',
  styleUrl: './offer-screen.component.css',
  providers: [ActiveCardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferScreenComponent implements OnInit, OnDestroy {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private tokenService = inject(TokenService);
  public reviews$?: Observable<ReviewType[]>;
  public nearbyOffers$?: Observable<Offer[]>;
  public offer$?: Observable<OfferFull | null>;

  public getMapOffers(
    nearbyOffers: Offer[],
    offer: OfferFull
  ): (Offer | OfferFull)[] {
    if (nearbyOffers.length) {
      return [...nearbyOffers.slice(0, 3), offer];
    } else return [];
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(loadOfferDetails({ offerId: params['id'] }));
    });
    this.offer$ = this.store.select(getOfferData);
    this.nearbyOffers$ = this.store.select(getNearbyOffers);
    this.reviews$ = this.store.select(getReviews);
  }

  public isAuthorized() {
    return Boolean(this.tokenService.getToken());
  }

  public ngOnDestroy(): void {
    this.store.dispatch(resetFormData());
  }
}
