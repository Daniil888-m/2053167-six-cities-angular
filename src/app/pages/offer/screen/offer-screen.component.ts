import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReviewFormComponent } from '../components/review-form/review-form.component';
import { reviewsMock } from '../../../mocks/reviews';
import { ReviewsListComponent } from '../components/reviews-list/reviews-list.component';
import { Offer, offersMock } from '../../../mocks/offers';
import { MapComponent } from '../../../common/components/map/map.component';
import { OfferFull, offerMock } from '../../../mocks/offer';

@Component({
  selector: 'app-offer-screen',
  imports: [ReviewFormComponent, ReviewsListComponent, MapComponent],
  templateUrl: './offer-screen.component.html',
  styleUrl: './offer-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferScreenComponent {
  reviews = reviewsMock;
  nearbyOffers: (Offer | OfferFull)[] = offersMock.slice(0, 3);
  offer: OfferFull = offerMock;
}
