import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainScreenComponent } from './screen/main-screen.component';
import { OFFERS_COUNT } from './main.model';

@Component({
  selector: 'app-main',
  imports: [MainScreenComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  public offersCount = OFFERS_COUNT;
}
