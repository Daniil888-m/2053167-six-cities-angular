import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Offer } from '../mocks/offers';
import { RatingPipe } from '../common/pipes/rating.pipe';
import { RouterLink } from '@angular/router';

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
