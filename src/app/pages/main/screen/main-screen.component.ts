import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { Offer, offersMock } from '../../../mocks/offers';
import { OffersListComponent } from '../../../offers-list/offers-list.component';
import { ActiveCardService } from '../services/active-card.service';

@Component({
  selector: 'app-main-screen',
  imports: [OffersListComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ActiveCardService],
})
export class MainScreenComponent {
  private activeOfferService = inject(ActiveCardService);

  public offersCount = input.required<number>();
  public activeOffer = signal<string | null>(null);
  public activeOfferId = '';

  public items: Offer[];

  constructor() {
    this.items = offersMock;

    this.activeOfferService.current$.subscribe((activeOffer) => {
      this.activeOfferId = activeOffer;
    });
  }
}
