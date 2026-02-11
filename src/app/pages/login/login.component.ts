import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../common/services/user.service';
import { Store } from '@ngrx/store';
import { login } from '../../store/user/user.actions';
import { RandomCityService } from './services/random-city.service';
import { ActiveCityService } from '../../common/services/active-city/active-city.service';
import { DEFAULT_ACTIVE_CITY } from '../../common/services/active-city/active-city.model';
import { DataSendingService } from './services/data-sending.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserService, RandomCityService],
})
export class LoginComponent implements OnDestroy {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  private router = inject(Router);
  private dataSendingService = inject(DataSendingService);
  public randomCityService = inject(RandomCityService);
  public activeCityService = inject(ActiveCityService);
  public loginForm: FormGroup;
  public isDataSending = signal(false);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });

    this.dataSendingService.isDataSending$.subscribe((isSending) => {
      this.isDataSending.set(isSending);
    });
  }

  public onCityClick($event: MouseEvent | Event) {
    $event.preventDefault();
    this.activeCityService.changeActiveCity(
      this.randomCityService.lastCity || DEFAULT_ACTIVE_CITY
    );
    this.router.navigate(['/']);
  }

  public onSubmit(): void {
    const formData = this.loginForm.value;
    this.store.dispatch(login(formData));
    this.dataSendingService.setDataSending();
  }

  public ngOnDestroy(): void {
    this.isDataSending.set(false);
  }
}
