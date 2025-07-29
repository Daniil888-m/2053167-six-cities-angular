import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { OfferCardComponent } from '../../../common/components/offer-card/offer-card.component';

@Component({
  selector: 'app-main-screen',
  imports: [OfferCardComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainScreenComponent {
  public offersCount = input.required<number>();

  public items: null[];
  constructor() {
    this.items = Array(5).fill(null);
  }
}
