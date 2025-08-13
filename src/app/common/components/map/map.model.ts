import { Icon } from 'leaflet';
import { MarkerUrl } from '../../consts';

export const defaultCustomIcon = new Icon({
  iconUrl: MarkerUrl.DEFAULT,
  iconSize: [31, 40],
  iconAnchor: [20, 40],
});

export const currentCustomIcon = new Icon({
  iconUrl: MarkerUrl.CURRENT,
  iconSize: [31, 40],
  iconAnchor: [20, 40],
});
