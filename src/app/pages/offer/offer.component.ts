import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OfferScreenComponent } from './screen/offer-screen.component';

@Component({
  selector: 'app-offer',
  imports: [OfferScreenComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferComponent {}
