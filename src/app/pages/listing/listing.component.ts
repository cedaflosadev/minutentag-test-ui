import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { AppService } from 'src/app/services/app.service';

import { CommonModule, NgOptimizedImage } from '@angular/common';
import { baseImgUrl } from 'src/app/utils/contants';
import { StockPrice } from 'src/app/interfaces/stock-price.interface';

import { getLocaleId } from 'src/app/utils/getId';
import { Router } from '@angular/router';
import { getPrice } from 'src/app/utils/getPrice';
import { HeaderTabAvatarComponent } from 'src/app/shared/components/header-tab-avatar/header-tab-avatar.component';
import { InputPrefixImgComponent } from 'src/app/shared/components/input-prefix-img/input-prefix-img.component';
import { SlideCategoryComponent } from 'src/app/shared/components/slide-category/slide-category.component';
import { GridCategoryProductComponent } from 'src/app/shared/components/grid-category-product/grid-category-product.component';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    HeaderTabAvatarComponent,
    InputPrefixImgComponent,
    SlideCategoryComponent,
    GridCategoryProductComponent,
  ],
})
export class ListingComponent implements OnInit {
  products = [] as Product[];

  stockprice = {};

  baseImgUrl = baseImgUrl;

  constructor(private appService: AppService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllStockPrice();
  }

  goToDetail(product: Product): void {
    const urlProduct = getLocaleId(product.id.toString(), product.brand);
    this.router.navigate([urlProduct]);
  }

  getProducts(): void {
    this.appService
      .getProducts()
      .pipe(
        take(1),
        tap((productsResponse) => {
          const { response, products } = productsResponse;
          if (response) {
            this.products = products;
          }
        })
      )
      .subscribe();
  }

  getAllStockPrice(): void {
    this.appService
      .getAllStockPrice()
      .pipe(
        take(1),
        tap((productsResponse) => {
          const { response, stockprice } = productsResponse;
          if (response) {
            this.products.forEach((product) => {
              product.initialValue = getPrice(
                stockprice[product.skus[0].code].price
              );
            });
          }
        })
      )
      .subscribe();
  }
}
