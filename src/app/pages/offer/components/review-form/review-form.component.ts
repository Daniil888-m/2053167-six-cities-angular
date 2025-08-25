import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewFormComponent {
  private fb = inject(FormBuilder);
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
      text: ['', [Validators.required, Validators.minLength(50)]],
      rating: [0, [Validators.required, Validators.min(1)]],
    });
  }

  public onSubmit() {
    const data = this.reviewForm.value;
    console.log(data);
    this.reviewForm.reset();
  }
}
