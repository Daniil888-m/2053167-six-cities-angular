import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FavoriteListComponent } from '../favorite-list/favorite-list.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserFavorites } from '../../../store/user/user.selectors';
import { AsyncPipe } from '@angular/common';
import { Offer } from '../../../common/types/types';

@Component({
  selector: 'app-favorites-screen',
  imports: [FavoriteListComponent, AsyncPipe],
  templateUrl: './favorites-screen.component.html',
  styleUrl: './favorites-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesScreenComponent {
  private store = inject(Store);

  public offers$: Observable<Offer[]>;

  constructor() {
    this.offers$ = this.store.select(selectUserFavorites);
  }
}
