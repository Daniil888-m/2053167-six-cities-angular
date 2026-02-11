import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OfferCardComponent } from '../../../../common/components/offer-card/offer-card.component';
import { Offer } from '../../../../common/types/types';

@Component({
  selector: 'app-nearby-list',
  imports: [OfferCardComponent],
  templateUrl: './nearby-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NearbyListComponent {
  public offers = input.required<Offer[]>();
}
