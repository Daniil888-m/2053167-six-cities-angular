import { Component, input } from '@angular/core';
import { ReviewType } from '../../../../mocks/reviews';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-reviews-list',
  imports: [ReviewComponent],
  templateUrl: './reviews-list.component.html',
  styleUrl: './reviews-list.component.css',
})
export class ReviewsListComponent {
  reviews = input.required<ReviewType[]>();
}
