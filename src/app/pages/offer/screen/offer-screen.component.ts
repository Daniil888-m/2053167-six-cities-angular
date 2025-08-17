import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReviewFormComponent } from '../components/review-form/review-form.component';
import { reviewsMock } from '../../../mocks/reviews';
import { ReviewsListComponent } from '../components/reviews-list/reviews-list.component';

@Component({
  selector: 'app-offer-screen',
  imports: [ReviewFormComponent, ReviewsListComponent],
  templateUrl: './offer-screen.component.html',
  styleUrl: './offer-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferScreenComponent {
  reviews = reviewsMock;
}
