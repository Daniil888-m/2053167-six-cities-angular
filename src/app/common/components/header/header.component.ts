import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserFeature } from '../../../store/user/user.selectors';
import { userState } from '../../../store/user/user.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private store = inject(Store);
  public userInfo?: WritableSignal<userState>;

  public ngOnInit(): void {
    const userData$ = this.store.select(getUserFeature);
    userData$.subscribe((userInfo) => {
      this.userInfo = signal<userState>(userInfo);
    });
  }
}
