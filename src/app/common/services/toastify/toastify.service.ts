import { Injectable } from '@angular/core';
import Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root',
})
export class ToastifyService {
  public showToast(text: string) {
    console.log('toast showed!');

    Toastify({
      text,
      duration: 3000,
      close: true,
      gravity: 'top',
      position: 'right',
      stopOnFocus: true,
      style: {
        background: 'linear-gradient(to right, #d34909ff, #f12727ff)',
      },
    }).showToast();
  }
}
