import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCategoryCardComponent } from '../slide-category-card/slide-category-card.component';

@Component({
  selector: 'app-slide-category',
  standalone: true,
  imports: [CommonModule, SlideCategoryCardComponent],
  templateUrl: './slide-category.component.html',
  styleUrls: ['./slide-category.component.scss'],
})
export class SlideCategoryComponent {}
