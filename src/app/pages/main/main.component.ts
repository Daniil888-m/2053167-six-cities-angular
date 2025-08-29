import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainScreenComponent } from './screen/main-screen.component';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-main',
  imports: [MainScreenComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
