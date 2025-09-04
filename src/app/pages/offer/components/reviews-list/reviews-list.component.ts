import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReviewComponent } from '../review/review.component';
import { ReviewType } from '../../../../common/types/types';

@Component({
  selector: 'app-reviews-list',
  imports: [ReviewComponent],
  templateUrl: './reviews-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsListComponent {
  public reviews = input.required<ReviewType[]>();
}
