import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FavoritesScreenComponent } from './screen/favorites-screen.component';

@Component({
  selector: 'app-favorites',
  imports: [FavoritesScreenComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {}
