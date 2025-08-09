import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnDestroy,
  signal,
} from '@angular/core';
import { Offer, offersMock } from '../../../mocks/offers';
import { OffersListComponent } from '../../../offers-list/offers-list.component';
import { ActiveCardService } from '../services/active-card.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-main-screen',
  imports: [OffersListComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ActiveCardService],
})
export class MainScreenComponent implements OnDestroy {
  private activeOfferService = inject(ActiveCardService);

  public offersCount = input.required<number>();
  public activeOffer = signal<string | null>(null);
  public activeOfferId = '';

  public items: Offer[];
  private destroy$ = new Subject<void>();

  constructor() {
    this.items = offersMock;

    this.activeOfferService.current$
      .pipe(takeUntil(this.destroy$))
      .subscribe((activeOffer) => {
        this.activeOfferId = activeOffer;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
