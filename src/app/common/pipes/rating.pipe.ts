import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingValue',
})
export class RatingPipe implements PipeTransform {
  transform(value: number): unknown {
    return `${Math.round(value) * 20}%`;
  }
}
