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
      this.content = '<p>這是一個警報訊息</p>';
    }, 1000);
  }
}
