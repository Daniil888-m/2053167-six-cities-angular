import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserFeature } from '../../../store/user/user.selectors';
import { UserState } from '../../../store/user/user.model';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  private store = inject(Store);
  private cdr = inject(ChangeDetectorRef);
  public userInfo?: UserState;

  public ngOnInit(): void {
    const userData$ = this.store.select(getUserFeature);
    userData$.subscribe((userInfo) => {
      this.userInfo = userInfo;
      this.cdr.detectChanges();
    });
  }
}
