import { Component, input } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { Offer } from '../../types/types';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
})
export class OffersListComponent {
  public offers = input.required<Offer[]>();
}
