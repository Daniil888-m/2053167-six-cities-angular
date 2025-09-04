import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { RatingPipe } from '../../../common/pipes/rating.pipe';
import { FavoriteItemDirective } from '../../../common/directives/favorite-item.directive';
import { Offer } from '../../../common/types/types';

@Component({
  selector: 'app-favorite-card',
  imports: [RatingPipe, RouterLink, FavoriteItemDirective],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteCardComponent {
  public offer = input.required<Offer>();
}
