export enum AuthorizationStatus {
  Auth,
  NoAuth,
  Unknown,
}

export enum CitiesList {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const LOGIN_TOKEN_NAME = 'six-sities-token';

export const MarkerUrl = {
  DEFAULT: '/img/pin.svg',
  CURRENT: '/img/pin-active.svg',
};
export const DEFAULT_ACTIVE_CITY = CitiesList.Paris;
