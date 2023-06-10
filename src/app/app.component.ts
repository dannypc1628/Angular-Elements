import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  content = '';

  constructor() {
    setTimeout(() => {
      this.content = "<app-alert message='這是一個警報範例'></app-alert>";
    }, 1000);
  }
}
