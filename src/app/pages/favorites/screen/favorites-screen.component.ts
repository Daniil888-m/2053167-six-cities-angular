import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { favoritesMock } from '../../../mocks/offers';
import { FavoriteListComponent } from '../favorite-list/favorite-list.component';

@Component({
  selector: 'app-favorites-screen',
  imports: [FavoriteListComponent],
  templateUrl: './favorites-screen.component.html',
  styleUrl: './favorites-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesScreenComponent {
  public offers = favoritesMock;

  public activeOffer = signal<string | null>(null);

  changeActiveOffer(newOfferId: string | null) {
    this.activeOffer.set(newOfferId);
  }
}
