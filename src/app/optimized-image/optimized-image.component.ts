import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.scss'
})
export class OptimizedImageComponent {

}
