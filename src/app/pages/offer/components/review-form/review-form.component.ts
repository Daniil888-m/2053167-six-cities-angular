import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-form',
  imports: [FormsModule],
  templateUrl: './review-form.component.html',
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  public reviewText = '';
  public reviewRate = 0;
}
