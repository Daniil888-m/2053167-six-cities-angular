import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Offer } from '../../../../common/types/types';
import { OffersService } from './offers.service';

describe('OffersService', () => {
  let service: OffersService;
  let httpController: HttpTestingController;

  const mockOffers: Offer[] = [
    {
      id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment',
      price: 120,
      city: {
        name: 'Amsterdam',
        location: {
          latitude: 52.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
      previewImage: 'https://url-to-image/image.png',
    },
    {
      id: '56af6f711-c28d-4121-82cd-e0b462a27f00',
      title: 'Beautiful & luxurious studio at great location',
      type: 'apartment',
      price: 120,
      city: {
        name: 'Paris',
        location: {
          latitude: 50.35514938496378,
          longitude: 4.673877537499948,
          zoom: 8,
        },
      },
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
      isFavorite: false,
      isPremium: false,
      rating: 4,
      previewImage: 'https://url-to-image/image.png',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OffersService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OffersService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch offers', (done) => {
    service.fetchOffers$().subscribe((offers) => {
      expect(offers).toEqual(mockOffers);
      done();
    });

    const req = httpController.expectOne('offers');
    req.flush(mockOffers);
  });

  it('should fetch offers successfully', (done) => {
    service.fetchOffers$().subscribe((offers) => {
      expect(offers).toEqual(mockOffers);
      done();
    });

    const req = httpController.expectOne('offers');
    req.flush(mockOffers);
  });

  it('should handle HTTP error', (done) => {
    const error = { status: 500, statusText: 'Server Error' };

    service.fetchOffers$().subscribe({
      error: (err) => {
        expect(err.status).toBe(500);
        expect(err.statusText).toBe('Server Error');
        done();
      },
    });

    const req = httpController.expectOne('offers');
    req.error(
      new ErrorEvent('Network error', { message: 'Server error' }),
      error
    );
  });
});
