import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FavoritesScreenComponent } from './screen/favorites-screen.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-favorites',
  imports: [FavoritesScreenComponent, HeaderComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {}
