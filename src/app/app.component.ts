import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  content = '';

  constructor(injector: Injector) {
    const AlertElement = createCustomElement(AlertComponent, { injector });
    // customElements 是原生 JS 的 API
    customElements.define('app-alert', AlertElement);
    setTimeout(() => {
      this.content = "<app-alert message='這是一個警報範例'></app-alert>";
    }, 1000);
  }
}
