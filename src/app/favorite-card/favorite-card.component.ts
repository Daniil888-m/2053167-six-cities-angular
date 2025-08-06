import { Component, input } from '@angular/core';
import { Offer } from '../mocks/offers';
import { RatingPipe } from '../common/pipes/rating.pipe';

@Component({
  selector: 'app-favorite-card',
  imports: [RatingPipe],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css',
})
export class FavoriteCardComponent {
  public offer = input.required<Offer>();
}
