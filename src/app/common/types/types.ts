interface Host {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export interface CityInfo {
  name: string;
  location: LocationInfo;
}

export interface LocationInfo {
  latitude: number;
  longitude: number;
  zoom: number;
}
export interface OfferFull {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityInfo;
  location: LocationInfo;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityInfo;
  location: LocationInfo;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export interface ReviewType {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

interface UserType {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export interface UserInfo extends UserType {
  email: string;
  token: string;
}
export interface LoginData {
  email: string;
  password: string;
}

export enum RequestStatus {
  Pending = 'PENDING',
  Idle = 'IDLE',
  Success = 'SUCCESS',
  Failed = 'FAILED',
}
export enum AuthStatus {
  Unknown = 'UNKNOWN',
  NoAuth = 'UNAUTHORIZED',
  Auth = 'SUCCESS',
}

export enum RequestRoute {
  Login = `login`,
  Offers = `offers`,
  Comments = `comments`,
  Logout = `logout`,
  Favorites = `favorite`,
}
