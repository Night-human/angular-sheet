import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsListComponent } from './nested-components/cards-list/cards-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsListComponent],
  template: '<app-cards-list/>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examples';
}
