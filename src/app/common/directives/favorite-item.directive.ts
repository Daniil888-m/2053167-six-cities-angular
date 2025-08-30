import {
  Directive,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectFavoriteById } from '../../store/user/user.selectors';
import { addFavorite, removeFavorite } from '../../store/user/user.actions';

@Directive({
  selector: '[appFavoriteItem]',
  standalone: true,
})
export class FavoriteItemDirective implements OnInit {
  private store = inject(Store);
  public offerId = input.required<string>();

  public isFavorite = signal(false);

  public ngOnInit(): void {
    this.store.select(selectFavoriteById(this.offerId())).subscribe((offer) => {
      this.isFavorite.set(offer?.isFavorite || false);
    });
  }

  @HostListener('click') onClick() {
    if (this.isFavorite()) {
      this.store.dispatch(removeFavorite({ favoriteId: this.offerId() }));
    } else {
      this.store.dispatch(addFavorite({ favoriteId: this.offerId() }));
    }
  }

  @HostBinding('class.offer__bookmark-button--active') get isActiveOffer() {
    return this.isFavorite();
  }
  @HostBinding('class.place-card__bookmark-button--active') get isActive() {
    return this.isFavorite();
  }
}
