import { Component, input } from '@angular/core';
import { Offer } from '../../../../mocks/offers';
import { OfferCardComponent } from '../../../../common/components/offer-card/offer-card.component';

@Component({
  selector: 'app-nearby-list',
  imports: [OfferCardComponent],
  templateUrl: './nearby-list.component.html',
})
export class NearbyListComponent {
  public offers = input.required<Offer[]>();
}
