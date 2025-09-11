import { TestBed } from '@angular/core/testing';
import { OffersService } from './offers.service';
import { provideHttpClient } from '@angular/common/http';

describe('Offers Service', () => {
  let service: OffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [],
    });
    service = TestBed.inject(OffersService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
