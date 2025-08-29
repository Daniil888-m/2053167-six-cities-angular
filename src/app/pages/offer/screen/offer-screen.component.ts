import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ReviewFormComponent } from '../components/review-form/review-form.component';
import { ReviewsListComponent } from '../components/reviews-list/reviews-list.component';
import { Offer } from '../../../mocks/offers';
import { MapComponent } from '../../../common/components/map/map.component';
import { OfferFull } from '../../../mocks/offer';
import { NearbyListComponent } from '../components/nearby-list/nearby-list.component';
import { ActiveCardService } from '../../main/services/active-card.service';
import { ReviewType } from '../../../mocks/reviews';
import { Store } from '@ngrx/store';
import { loadOfferDetails } from '../../../store/offer/offer.actions';
import { ActivatedRoute } from '@angular/router';
import { SpinnerComponent } from '../../../common/components/spinner/spinner.component';
import {
  getOfferData,
  getNearbyOffers,
  getReviews,
} from '../../../store/offer/offer.selectors';

@Component({
  selector: 'app-offer-screen',
  imports: [
    ReviewFormComponent,
    ReviewsListComponent,
    MapComponent,
    NearbyListComponent,
    SpinnerComponent,
  ],
  templateUrl: './offer-screen.component.html',
  styleUrl: './offer-screen.component.css',
  providers: [ActiveCardService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferScreenComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  public reviews: ReviewType[] = [];
  public nearbyOffers: Offer[] = [];
  public offer: OfferFull | null = null;

  public getMapOffers(): (Offer | OfferFull)[] {
    if (this.offer) {
      return [...this.nearbyOffers, this.offer];
    } else return [];
  }

  public ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.store.dispatch(loadOfferDetails({ offerId: params['id'] }));
    });
    this.store.select(getOfferData).subscribe((offerData) => {
      this.offer = offerData;
      this.cdr.detectChanges();
    });
    this.store.select(getNearbyOffers).subscribe((nearbyData) => {
      this.nearbyOffers = nearbyData;
      this.cdr.detectChanges();
    });
    this.store.select(getReviews).subscribe((reviewsData) => {
      this.reviews = reviewsData;
      this.cdr.detectChanges();
    });
  }
}
