import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsListComponent } from './nested-components/cards-list/cards-list.component';
import { OptimizedImageComponent } from './optimized-image/optimized-image.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OptimizedImageComponent],
  template: '<app-optimized-image/>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'examples';
}
