import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appEveryClick]',
})
export class EveryClickDirective {
  @Output() everyClick = new EventEmitter();

  private el = inject(ElementRef);

  @HostListener('window:click') onClick() {
    this.everyClick.emit();
  }
}
