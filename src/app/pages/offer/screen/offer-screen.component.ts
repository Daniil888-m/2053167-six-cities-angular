import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReviewFormComponent } from '../review-form/review-form.component';

@Component({
  selector: 'app-offer-screen',
  imports: [ReviewFormComponent],
  templateUrl: './offer-screen.component.html',
  styleUrl: './offer-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfferScreenComponent {}
