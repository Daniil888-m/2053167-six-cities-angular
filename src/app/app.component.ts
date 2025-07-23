import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from "./pages/main/main.component";
import { OFFERS_COUNT } from './utils/consts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-project';
  public offersCount = OFFERS_COUNT;
}
