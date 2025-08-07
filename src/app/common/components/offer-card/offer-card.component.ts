import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Offer } from '../../types/types';
import { RatingPipe } from '../../pipes/rating.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-offer-card',
  imports: [RatingPipe, RouterLink],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferCardComponent {
  public offer = input.required<Offer>();
  public handleChange = input.required<(offerId: string) => void>();

  public onMouseEnter = (): void => {
    if (this.handleChange()) {
      this.handleChange()(this.offer().id);
    }
  };
  public onMouseLeave = (): void => {
    if (this.handleChange()) {
      this.handleChange()('');
    }
  };
}
