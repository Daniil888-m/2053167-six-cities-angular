import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Offer, offersMock } from '../../../mocks/offers';
import { OffersListComponent } from '../../../offers-list/offers-list.component';

@Component({
  selector: 'app-main-screen',
  imports: [OffersListComponent],
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
