import { ChangeDetectionStrategy, Component } from '@angular/core';
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
}
