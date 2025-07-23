import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OfferCardComponent } from '../../common/components/offer-card/offer-card.component';
import { Offer } from '../../common/types/types';

@Component({
  selector: 'app-main-screen',
  imports: [OfferCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainScreenComponent {
  public items: Offer[] = Array(5).fill(null)
}
