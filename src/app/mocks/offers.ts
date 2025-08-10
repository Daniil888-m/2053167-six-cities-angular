export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export const offersMock: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 'gr465711-c28d-4121-82cd-e0b756a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 'jkk8a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '7908a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 'vfj9a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856388888889,
        longitude: 2.3438888888889,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg',
  },
];

export const favoritesMock = [
  {
    id: 'jkk8a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 100,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '7908a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 90,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.377956,
        longitude: 4.89707,
        zoom: 8,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: 'vfj9a711-c28d-4121-82cd-e0b756a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Paris',
      location: {
        latitude: 48.856388888889,
        longitude: 2.3438888888889,
        zoom: 8,
      },
    },
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
      zoom: 8,
    },
    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'img/apartment-02.jpg',
  },
];
