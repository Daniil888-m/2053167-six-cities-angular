import { Component, input } from '@angular/core';
import { ReviewType } from '../../../../mocks/reviews';
import { RatingPipe } from '../../../../common/pipes/rating.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-review',
  imports: [RatingPipe, DatePipe],
  templateUrl: './review.component.html',
})
export class ReviewComponent {
  public review = input.required<ReviewType>();
}
