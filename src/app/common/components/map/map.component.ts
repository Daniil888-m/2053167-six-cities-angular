import {
  AfterViewInit,
  Component,
  input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import * as L from 'leaflet';
import { CityInfo } from '../../../mocks/offers';
import { Offer } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import { currentCustomIcon, defaultCustomIcon } from './map.model';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent implements AfterViewInit, OnChanges, OnDestroy {
  cityInfo = input.required<CityInfo>();
  activeOffer = input.required<Offer | null>();
  currentOffers = input.required<Offer[]>();
  private markerLayer: L.LayerGroup | null = null;
  private isRenderedRef = false;
  private map: L.Map | null = null;

  private initMap(): void {
    this.map = L.map('map', {
      zoom: 12,
    });

    this.map?.setView(
      [this.cityInfo().location.latitude, this.cityInfo().location.longitude],
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

    this.markerLayer = L.layerGroup().addTo(this.map);
    if (this.markerLayer !== null) {
      this.currentOffers().forEach((point) => {
        const marker = new L.Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            point.id === this.activeOffer()?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(this.markerLayer as L.LayerGroup);
      });
      this.isRenderedRef = true;
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
    }, 100);
  }

  ngOnChanges() {
    if (!this.map || !this.markerLayer) return;
    if (this.isRenderedRef && this.map) {
      this.map?.removeLayer(this.markerLayer as L.LayerGroup);
      this.markerLayer = L.layerGroup().addTo(this.map);
      this.updateMarkers();

      if (this.cityInfo()) {
        this.map?.setView(
          [
            this.cityInfo().location.latitude,
            this.cityInfo().location.longitude,
          ],
          12
        );
      }
    }
  }

  ngOnDestroy() {
    this.map?.removeLayer(this.markerLayer as L.LayerGroup);
    this.map = null;
  }

  updateMarkers = () => {
    if (!this.map || !this.markerLayer) return;
    this.markerLayer = L.layerGroup().addTo(this.map);
    if (this.markerLayer !== null) {
      this.currentOffers().forEach((point) => {
        const marker = new L.Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            point.id === this.activeOffer()?.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(this.markerLayer as L.LayerGroup);
      });
      this.isRenderedRef = true;
    }
  };
}
