import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'src/app/interfaces/product.interface';

@Component({
  selector: 'app-sku-size-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sku-size-card.component.html',
  styleUrls: ['./sku-size-card.component.scss'],
})
export class SkuSizeCardComponent {
  @Input() productSelected!: Product;

  @Output() changeSkuEmit = new EventEmitter();

  changeSku(code: string, index: number) {
    this.changeSkuEmit.emit({ code, index });
  }
}
