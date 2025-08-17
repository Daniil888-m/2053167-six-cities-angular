import {
  AfterViewInit,
  Component,
  inject,
  input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { CityInfo } from '../../../mocks/offers';
import { Offer } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import { MapService } from './services/map.service';

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

  private mapService = inject(MapService);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.mapService.initMap(this.cityInfo());
      this.mapService.renderMarkers(this.currentOffers(), this.activeOffer());
    }, 100);
  }

  ngOnChanges() {
    this.mapService.renderMarkers(this.currentOffers(), this.activeOffer());
  }

  ngOnDestroy() {
    this.mapService?.destroy();
  }
}
