import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product.interface';
import { baseImgUrl } from 'src/app/utils/contants';

@Component({
  selector: 'app-grid-category-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid-category-product.component.html',
  styleUrls: ['./grid-category-product.component.scss'],
})
export class GridCategoryProductComponent {
  @Input() products = [] as Product[];

  @Output() goToDetailEmit = new EventEmitter();

  baseImgUrl = baseImgUrl;

  goToDetail(product: Product) {
    this.goToDetailEmit.emit(product);
  }
}
