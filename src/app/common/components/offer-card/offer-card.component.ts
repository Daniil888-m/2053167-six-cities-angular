import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Offer } from '../../types/types';
import { RatingPipe } from '../../pipes/rating.pipe';
import { RouterLink } from '@angular/router';
import { ActiveCardService } from '../../../pages/main/services/active-card.service';
import { FavoriteItemDirective } from '../../directives/favorite-item.directive';

@Component({
  selector: 'app-offer-card',
  imports: [RatingPipe, RouterLink, FavoriteItemDirective],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferCardComponent {
  private activeOfferService = inject(ActiveCardService);
  public isNearbyCard = input<boolean>(false);

  public offer = input.required<Offer>();

  public onMouseEnter = (): void => {
    this.activeOfferService.current$.next(this.offer());
  };
  public onMouseLeave = (): void => {
    this.activeOfferService.current$.next(null);
  };
}
