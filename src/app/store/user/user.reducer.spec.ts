import { userReducer, favoritesAdapter } from './user.reducer';
import {
  setFavorites,
  setUserInfo,
  setUserNoAuth,
  resetUserData,
  addFavoriteSuccess,
  removeFavoriteSuccess,
} from './user.actions';
import { AuthStatus } from '../../common/types/types';

const initialState = {
  name: '',
  avatarUrl: '',
  isPro: false,
  email: '',
  authStatus: AuthStatus.Unknown,
  favoritesOffers: favoritesAdapter.getInitialState(),
};

describe('UserReducer', () => {
  it('should return the initial state', () => {
    const state = userReducer(undefined, { type: 'UNKNOWN_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('should set favorites', () => {
    const favorites = [
      {
        id: '1',
        title: 'Test Offer',
        type: 'apartment',
        price: 100,
        city: {
          name: 'Paris',
          location: {
            latitude: 48.856,
            longitude: 2.3522,
            zoom: 12,
          },
        },
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 12,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.5,
        previewImage: 'test-image.jpg',
      },
    ];

    const action = setFavorites({ favorites });
    const state = userReducer(initialState, action);

    expect(state.favoritesOffers.ids).toEqual(['1']);
    expect(state.favoritesOffers.entities['1']).toEqual(favorites[0]);
  });

  it('should set user info', () => {
    const userInfo = {
      name: 'John Doe',
      avatarUrl: 'avatar.jpg',
      isPro: true,
      email: 'john@example.com',
      token: 'test-token',
    };

    const action = setUserInfo(userInfo);
    const state = userReducer(initialState, action);

    expect(state.name).toEqual(userInfo.name);
    expect(state.avatarUrl).toEqual(userInfo.avatarUrl);
    expect(state.isPro).toEqual(userInfo.isPro);
    expect(state.email).toEqual(userInfo.email);
    expect(state.authStatus).toEqual(AuthStatus.Auth);
  });

  it('should set user to no auth', () => {
    const action = setUserNoAuth();
    const state = userReducer(initialState, action);

    expect(state.authStatus).toEqual(AuthStatus.NoAuth);
  });

  it('should reset user data', () => {
    const currentState = {
      ...initialState,
      name: 'John Doe',
      email: 'john@example.com',
      authStatus: AuthStatus.Auth,
    };

    const action = resetUserData();
    const state = userReducer(currentState, action);

    expect(state.name).toEqual(initialState.name);
    expect(state.email).toEqual(initialState.email);
    expect(state.authStatus).toEqual(AuthStatus.NoAuth);
  });

  it('should add favorite', () => {
    const offer = {
      id: '1',
      title: 'Test Offer',
      type: 'apartment',
      price: 100,
      city: {
        name: 'Paris',
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 12,
        },
      },
      location: {
        latitude: 48.8566,
        longitude: 2.3522,
        zoom: 12,
      },
      isFavorite: true,
      isPremium: false,
      rating: 4.5,
      previewImage: 'test-image.jpg',
    };

    const action = addFavoriteSuccess({ offer });
    const state = userReducer(initialState, action);

    expect(state.favoritesOffers.ids).toEqual(['1']);
    expect(state.favoritesOffers.entities['1']).toEqual(offer);
  });

  it('should remove favorite', () => {
    const initialStateWithFavorites = {
      ...initialState,
      favoritesOffers: favoritesAdapter.setAll(
        [
          {
            id: '1',
            title: 'Test Offer 1',
            type: 'apartment',
            price: 100,
            city: {
              name: 'Paris',
              location: {
                latitude: 48.8566,
                longitude: 2.3522,
                zoom: 12,
              },
            },
            location: {
              latitude: 48.8566,
              longitude: 2.3522,
              zoom: 12,
            },
            isFavorite: true,
            isPremium: false,
            rating: 4.5,
            previewImage: 'test-image-1.jpg',
          },
          {
            id: '2',
            title: 'Test Offer 2',
            type: 'room',
            price: 50,
            city: {
              name: 'Paris',
              location: {
                latitude: 48.8566,
                longitude: 2.3522,
                zoom: 12,
              },
            },
            location: {
              latitude: 48.8566,
              longitude: 2.3522,
              zoom: 12,
            },
            isFavorite: true,
            isPremium: false,
            rating: 4.0,
            previewImage: 'test-image-2.jpg',
          },
        ],
        initialState.favoritesOffers
      ),
    };

    const action = removeFavoriteSuccess({
      offer: {
        id: '1',
        title: 'Test Offer 1',
        type: 'apartment',
        price: 100,
        city: {
          name: 'Paris',
          location: {
            latitude: 48.8566,
            longitude: 2.3522,
            zoom: 12,
          },
        },
        location: {
          latitude: 48.8566,
          longitude: 2.3522,
          zoom: 12,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.5,
        previewImage: 'test-image-1.jpg',
      },
    });
    const state = userReducer(initialStateWithFavorites, action);

    expect(state.favoritesOffers.ids).toEqual(['2']);
    expect(state.favoritesOffers.entities['1']).toBeUndefined();
    expect(state.favoritesOffers.entities['2']).toBeDefined();
  });
});
