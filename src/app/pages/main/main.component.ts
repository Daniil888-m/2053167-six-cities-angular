import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainScreenComponent } from '../../screens/main/main.component';
import { OFFERS_COUNT } from '../../utils/consts';

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
