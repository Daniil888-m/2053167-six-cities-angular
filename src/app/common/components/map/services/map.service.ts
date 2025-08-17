import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { CityInfo } from '../../../../mocks/offers';
import { Offer } from '../../../types/types';
import { currentCustomIcon, defaultCustomIcon } from '../map.model';
@Injectable({
  providedIn: 'root',
})
export class MapService {
  private markerLayer: L.LayerGroup | null = null;
  private isRenderedRef = false;
  private map: L.Map | null = null;

  cityInfo: CityInfo | null = null;
  activeOffer?: Offer;

  public initMap(cityInfo: CityInfo): void {
    this.cityInfo = cityInfo;
    this.map = L.map('map', {
      zoom: 12,
    });

    this.map?.setView(
      [this.cityInfo.location.latitude, this.cityInfo.location.longitude],
      12
    );

    const tiles = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    tiles.addTo(this.map);
  }

  public renderMarkers(offers: Offer[], activeOffer: Offer | null) {
    if (!this.map) return;

    if (this.isRenderedRef && this.map) {
      this.map?.removeLayer(this.markerLayer as L.LayerGroup);
      this.markerLayer = L.layerGroup().addTo(this.map);
    }
    if (offers.length) {
      this.markerLayer = L.layerGroup().addTo(this.map);
      if (this.markerLayer !== null) {
        offers.forEach((point) => {
          const marker = new L.Marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          });

          marker
            .setIcon(
              point.id === activeOffer?.id
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(this.markerLayer as L.LayerGroup);
        });
        this.isRenderedRef = true;
      }

      this.map.setView(
        [offers[0].city.location.latitude, offers[0].city.location.longitude],
        12
      );
    }
  }

  public destroy() {
    this.map?.remove();
    this.map = null;
  }
}
