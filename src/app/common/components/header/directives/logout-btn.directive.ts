import { Directive, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../../../store/user/user.actions';

@Directive({
  selector: '[appLogoutBtn]',
})
export class LogoutBtnDirective {
  private store = inject(Store);
  private router = inject(Router);

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
