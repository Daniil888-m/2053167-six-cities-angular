import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainScreenComponent } from '../../screens/main/main.component';

@Component({
  selector: 'app-main',
  imports: [MainScreenComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
