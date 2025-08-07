import { Component, input } from '@angular/core';
import { OfferCardComponent } from '../common/components/offer-card/offer-card.component';
import { Offer } from '../common/types/types';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent, FavoriteCardComponent, NgClass],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
})
export class OffersListComponent {
  public offers = input.required<Offer[]>();
  public handleChange = input<(offerId: string) => void>();

  public forFavoritePage = input();
}
