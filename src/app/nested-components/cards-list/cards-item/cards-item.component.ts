import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards-item',
  standalone: true,
  imports: [],
  templateUrl: './cards-item.component.html',
  styleUrl: './cards-item.component.scss'
})
export class CardsItemComponent {
  //Input First, set the @Input for parent to child communication
  @Input() city = '';

  //Output First, set the @Output for child to parent communication
  @Output() increaseCounterEvent = new EventEmitter<string>();
  //Output Second, create a function for Output
  addItem() {
    this.increaseCounterEvent.emit("Hello");
  }

}
