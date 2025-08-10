import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { RatingPipe } from '../../../common/pipes/rating.pipe';
import { Offer } from '../../../mocks/offers';

@Component({
  selector: 'app-favorite-card',
  imports: [RatingPipe, RouterLink],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteCardComponent {
  public offer = input.required<Offer>();
}
