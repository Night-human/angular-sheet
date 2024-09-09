import { Component } from '@angular/core';

@Component({
  selector: 'app-if-for-component',
  standalone: true,
  imports: [],
  templateUrl: './if-for-component.component.html',
  styleUrl: './if-for-component.component.scss'
})
export class IfForComponentComponent {
//First, set Data for the example
users = [{name:"Alejandro", age:28}, {name:"John", age:22}, {name:"Ivan", age:18}, {name:"Sofia", age:8}]
}
