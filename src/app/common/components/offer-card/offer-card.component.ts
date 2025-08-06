import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Offer } from '../../types/types';
import { RatingPipe } from '../../pipes/rating.pipe';

@Component({
  selector: 'app-offer-card',
  imports: [RatingPipe],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferCardComponent {
  public offer = input.required<Offer>();
}
