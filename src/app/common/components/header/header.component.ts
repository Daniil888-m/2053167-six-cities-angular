import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserFeature } from '../../../store/user/user.selectors';
import { UserState } from '../../../store/user/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AuthStatus } from '../../types/types';

@Component({
  selector: 'app-header',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private store = inject(Store);
  public userData$?: Observable<UserState>;
  public authStatusEnum = AuthStatus;

  constructor() {
    this.userData$ = this.store.select(getUserFeature);
  }
}
