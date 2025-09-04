import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RatingPipe } from '../../../../common/pipes/rating.pipe';
import { DatePipe } from '@angular/common';
import { ReviewType } from '../../../../common/types/types';

@Component({
  selector: 'app-review',
  imports: [RatingPipe, DatePipe],
  templateUrl: './review.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent {
  public review = input.required<ReviewType>();
}
