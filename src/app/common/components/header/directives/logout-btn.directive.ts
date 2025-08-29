import { Directive, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../../../store/user/user.actions';
import { TokenService } from '../../../services/token.service';

@Directive({
  selector: '[appLogoutBtn]',
})
export class LogoutBtnDirective {
  private store = inject(Store);
  private router = inject(Router);
  private tokenService = inject(TokenService);

  @HostListener('click', ['$event']) onClick($event: MouseEvent) {
    $event.preventDefault();
    this.store.dispatch(logout());
    this.tokenService.dropToken();
    this.router.navigate(['/login']);
  }
}
