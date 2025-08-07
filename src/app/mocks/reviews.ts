export interface ReviewType {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
}

export const reviews: ReviewType[] = [
  {
    id: 'a1b2c3d4-e5f6-7g8h-9i10-j11k12l13m14',
    date: '2023-07-15T10:30:45.123Z',
    user: {
      name: 'Emma Watson',
      avatarUrl:
        'https://cdn.fishki.net/upload/post/2019/12/06/3161519/65a7e19b7a112e12c403055913cacd61.jpg',
      isPro: true,
    },
    comment:
      'Great location and friendly staff! The room was clean and comfortable. Would definitely stay here again.',
    rating: 5,
  },
  {
    id: 'n15o16p17-q18r19s20-t21u22v23-w24x25y26',
    date: '2022-11-22T18:45:30.456Z',
    user: {
      name: 'John Smith',
      avatarUrl:
        'https://masterpiecer-images.s3.yandex.net/2f480de9651211eebb15aaafe6635749:upscaled',
      isPro: false,
    },
    comment:
      'Nice place, but the Wi-Fi was a bit slow. The view from the balcony was amazing though!',
    rating: 3,
  },
  {
    id: 'z27a28b29-c30d31e32-f33g34h35-i36j37k38',
    date: '2024-01-05T09:15:20.789Z',
    user: {
      name: 'Sophia Garcia',
      avatarUrl:
        'https://cdn.fishki.net/upload/post/2019/12/06/3161519/65a7e19b7a112e12c403055913cacd61.jpg',
      isPro: true,
    },
    comment:
      'Absolutely loved the interior design! The breakfast was delicious too. Highly recommend this place.',
    rating: 5,
  },
  {
    id: 'l39m40n41-o42p43q44-r45s46t47-u48v49w50',
    date: '2021-09-30T16:20:10.321Z',
    user: {
      name: 'Michael Brown',
      avatarUrl:
        'https://masterpiecer-images.s3.yandex.net/daeb36676c5d11ee998e1e5d9776cfa6:upscaled',
      isPro: false,
    },
    comment:
      'The room was smaller than expected, but it had everything I needed. Good value for the price.',
    rating: 4,
  },
];
