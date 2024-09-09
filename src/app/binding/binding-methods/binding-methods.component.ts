import { Component, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-binding-methods',
  standalone: true,
  imports: [],
  templateUrl: './binding-methods.component.html',
  styleUrl: './binding-methods.component.scss'
})
export class BindingMethodsComponent {
  //Interpolation for {{ interpolation }}
  interpolation = "Hello on the screen";
  //Dynamic properties binding for [title]
  dynamic = "This is a dynamic html property";
  //Handle dynamic events for (click)
  updateInterpolation() {
    this.interpolation = "Now you are updating me";
  }
  //There is another binding method, is used with forms [()]

}
