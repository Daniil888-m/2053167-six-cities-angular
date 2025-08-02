import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OfferScreenComponent } from './screen/offer-screen.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-offer',
  imports: [OfferScreenComponent, HeaderComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferComponent {}
