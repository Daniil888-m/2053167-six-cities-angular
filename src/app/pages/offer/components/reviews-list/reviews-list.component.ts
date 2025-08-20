import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ReviewType } from '../../../../mocks/reviews';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-reviews-list',
  imports: [ReviewComponent],
  templateUrl: './reviews-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewsListComponent {
  public reviews = input.required<ReviewType[]>();
}
