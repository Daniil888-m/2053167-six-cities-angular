import {
  AfterViewInit,
  Component,
  inject,
  input,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { CityInfo } from '../../../mocks/offers';
import { Offer, OfferFull } from '../../types/types';
import 'leaflet/dist/leaflet.css';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
  providers: [MapService],
})
export class MapComponent implements AfterViewInit, OnChanges, OnDestroy {
  cityInfo = input.required<CityInfo | null>();
  activeOffer = input.required<Offer | { id: string } | null>();
  currentOffers = input.required<(Offer | OfferFull)[]>();
  private mapService = inject(MapService);

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.cityInfo()) {
        this.mapService.initMap(this.cityInfo() as CityInfo);
        this.mapService.renderMarkers(this.currentOffers(), this.activeOffer());
      }
    }, 100);
  }

  ngOnChanges() {
    this.mapService.renderMarkers(this.currentOffers(), this.activeOffer());
  }

  ngOnDestroy() {
    this.mapService?.destroy();
  }
}
