import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addReview } from '../../../../store/offer/offer.actions';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);
  public offerId = input.required<string>();
  public reviewForm: FormGroup;

  public ratingData = [
    { value: 5, title: 'perfect' },
    { value: 4, title: 'good' },
    { value: 3, title: 'not bad' },
    { value: 2, title: 'bad' },
    { value: 1, title: 'terribly' },
  ];

  constructor() {
    this.reviewForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(50)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });
  }

  public onSubmit() {
    const data = this.reviewForm.value;

    this.store.dispatch(
      addReview({
        review: { ...data, rating: Number(data.rating) },
        offerId: this.offerId(),
      })
    );
    this.reviewForm.reset();
  }
}
