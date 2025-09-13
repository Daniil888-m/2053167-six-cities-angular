import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Event, UrlTree } from '@angular/router';
import { By } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoginComponent } from './login.component';
import { RandomCityService } from './services/random-city.service';
import { ActiveCityService } from '../../common/services/active-city/active-city.service';
import { DataSendingService } from './services/data-sending.service';
import { CitiesList } from '../../common/services/active-city/active-city.model';
import { login } from '../../store/user/user.actions';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockStore: jasmine.SpyObj<Store>;
  let mockRouter: jasmine.SpyObj<Router> & {
    events: BehaviorSubject<Event | null>;
  };
  let mockRandomCityService: jasmine.SpyObj<RandomCityService>;
  let mockActiveCityService: jasmine.SpyObj<ActiveCityService>;
  let mockDataSendingService: jasmine.SpyObj<DataSendingService>;

  beforeEach(async () => {
    mockStore = jasmine.createSpyObj<Store>('Store', ['dispatch']);

    mockRouter = jasmine.createSpyObj<Router>('Router', [
      'navigate',
      'createUrlTree',
      'serializeUrl',
    ]) as jasmine.SpyObj<Router> & { events: BehaviorSubject<Event | null> };
    (
      mockRouter as unknown as { events: BehaviorSubject<Event | null> }
    ).events = new BehaviorSubject<Event | null>(null);

    mockRouter.createUrlTree.and.returnValue({} as UrlTree);
    mockRouter.serializeUrl.and.returnValue('');

    mockRandomCityService = jasmine.createSpyObj<RandomCityService>(
      'RandomCityService',
      ['getRandomCity']
    );
    mockRandomCityService.lastCity = undefined;
    mockRandomCityService.getRandomCity.and.callFake(() => {
      mockRandomCityService.lastCity = CitiesList.Paris;
      return CitiesList.Paris;
    });

    mockActiveCityService = jasmine.createSpyObj<ActiveCityService>(
      'ActiveCityService',
      ['changeActiveCity']
    );
    mockDataSendingService = jasmine.createSpyObj<DataSendingService>(
      'DataSendingService',
      ['setDataSending', 'setDataNotSending'],
      {
        isDataSending$: new BehaviorSubject<boolean>(false),
      }
    );

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginComponent],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: { snapshot: {} } },
        { provide: RandomCityService, useValue: mockRandomCityService },
        { provide: ActiveCityService, useValue: mockActiveCityService },
        { provide: DataSendingService, useValue: mockDataSendingService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize login form with email and password controls', () => {
    expect(component.loginForm.contains('email')).toBeTrue();
    expect(component.loginForm.contains('password')).toBeTrue();
  });

  it('should make email control required', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.hasError('required')).toBeTrue();
  });

  it('should validate email format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.hasError('email')).toBeTrue();

    emailControl?.setValue('valid@example.com');
    expect(emailControl?.valid).toBeTrue();
    expect(emailControl?.hasError('email')).toBeFalse();
  });

  it('should make password control required', () => {
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.valid).toBeFalse();
    expect(passwordControl?.hasError('required')).toBeTrue();
  });

  it('should validate password format (minimum 8 characters with letters and numbers)', () => {
    const passwordControl = component.loginForm.get('password');

    passwordControl?.setValue('1234567');
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('abcdefgh');
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('12345678');
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('password123');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('should disable submit button when form is invalid', () => {
    const submitButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it('should enable submit button when form is valid', () => {
    component.loginForm.get('email')?.setValue('test@example.com');
    component.loginForm.get('password')?.setValue('password123');

    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    expect(submitButton.nativeElement.disabled).toBeFalse();
  });

  it('should dispatch login action and set data sending on form submit', () => {
    const email = 'test@example.com';
    const password = 'password123';

    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);

    component.onSubmit();

    expect(mockStore.dispatch).toHaveBeenCalledWith(login({ email, password }));
    expect(mockDataSendingService.setDataSending).toHaveBeenCalled();
  });

  it('should navigate to main page and change active city on city click', () => {
    const mockEvent = {
      preventDefault: jasmine.createSpy('preventDefault'),
    } as unknown as MouseEvent;

    const freshFixture = TestBed.createComponent(LoginComponent);
    const freshComponent = freshFixture.componentInstance;

    freshComponent.randomCityService.lastCity = CitiesList.Amsterdam;
    mockActiveCityService.changeActiveCity.calls.reset();

    freshComponent.onCityClick(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockActiveCityService.changeActiveCity).toHaveBeenCalledWith(
      CitiesList.Amsterdam
    );
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should use default city when no last city is available', () => {
    const mockEvent = {
      preventDefault: jasmine.createSpy('preventDefault'),
    } as unknown as MouseEvent;

    const freshFixture = TestBed.createComponent(LoginComponent);
    const freshComponent = freshFixture.componentInstance;

    freshComponent.randomCityService.lastCity = undefined;
    mockActiveCityService.changeActiveCity.calls.reset();

    freshComponent.onCityClick(mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(mockActiveCityService.changeActiveCity).toHaveBeenCalledWith(
      CitiesList.Paris
    );
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should disable submit button when data is sending', () => {
    mockDataSendingService.isDataSending$.next(true);
    fixture.detectChanges();

    component.loginForm.get('email')?.setValue('test@example.com');
    component.loginForm.get('password')?.setValue('password123');
    fixture.detectChanges();

    const submitButton = fixture.debugElement.query(
      By.css('button[type="submit"]')
    );
    expect(submitButton.nativeElement.disabled).toBeTrue();
  });

  it('should clean up subscription on destroy', () => {
    spyOn(component.isDataSending, 'set');
    component.ngOnDestroy();
    expect(component.isDataSending.set).toHaveBeenCalledWith(false);
  });
});
