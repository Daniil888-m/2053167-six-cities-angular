import { Component, input } from '@angular/core';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { Offer } from '../../types/types';
import { NgClass } from '@angular/common';
import { FavoriteCardComponent } from '../../../pages/favorites/favorite-card/favorite-card.component';

@Component({
  selector: 'app-offers-list',
  imports: [OfferCardComponent, FavoriteCardComponent, NgClass],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
})
export class OffersListComponent {
  public offers = input.required<Offer[]>();

  public forFavoritePage = input();
}
