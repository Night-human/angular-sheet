import { Component } from '@angular/core';
// First, Add the import
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-optimized-image',
  standalone: true,
  // Second, Import
  imports: [NgOptimizedImage],
  templateUrl: './optimized-image.component.html',
  styleUrl: './optimized-image.component.scss'
})
export class OptimizedImageComponent {

}
