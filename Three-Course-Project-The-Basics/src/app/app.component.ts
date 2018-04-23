import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  featureClicked = 'recipe';

  onEvent(event: string) {
    this.featureClicked = event;

  }
}
