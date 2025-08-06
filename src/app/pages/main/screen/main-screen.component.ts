import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OfferCardComponent } from '../../../common/components/offer-card/offer-card.component';
import { Offer, offersMock } from '../../../mocks/offers';

@Component({
  selector: 'app-main-screen',
  imports: [OfferCardComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainScreenComponent {
  public offersCount = input.required<number>();

  public items: Offer[];
  constructor() {
    this.items = offersMock;
  }
}
