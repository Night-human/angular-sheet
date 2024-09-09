import { Component } from '@angular/core';
//Nested First, import child component
import { CardsItemComponent } from './cards-item/cards-item.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  //Nested Second, add it to imports
  imports: [CardsItemComponent],
  //Nested Third, use the selector
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {
  //Output Four, create the function to receive the event
  items = new Array();
  addItem(item: string) {
    this.items.push(item);
    console.log(item);
  } 
}
