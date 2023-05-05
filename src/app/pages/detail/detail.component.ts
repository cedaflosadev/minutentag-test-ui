import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subject,
  interval,
  take,
  takeUntil,
  tap,
} from 'rxjs';

import { Product } from 'src/app/interfaces/product.interface';
import { StockPrice } from 'src/app/interfaces/stock-price.interface';
import { ReadMoreDirective } from 'src/app/shared/directives/read-more.directive';
import { AppService } from 'src/app/services/app.service';
import { baseImgUrl } from 'src/app/utils/contants';
import { getLocaleId } from 'src/app/utils/getId';
import { getPrice } from 'src/app/utils/getPrice';
import { HeaderDetailBackOptionsComponent } from 'src/app/shared/components/header-detail-back-options/header-detail-back-options.component';
import { SkuSizeCardComponent } from 'src/app/shared/components/sku-size-card/sku-size-card.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
    CommonModule,
    ReadMoreDirective,
    HeaderDetailBackOptionsComponent,
    SkuSizeCardComponent,
  ],
})
export class DetailComponent implements OnInit, OnDestroy {
  productSelected = {} as Product;

  unsubscribe = new Subject<void>();

  baseImgUrl = baseImgUrl;

  flow$!: Observable<any>;

  readMore = false;

  codeSelect = '';

  indexSelected = 0;

  constructor(
    private router: Router,
    private appService: AppService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const source = interval(5000);
    this.route.params.pipe(takeUntil(this.unsubscribe)).subscribe((params) => {
      this.flow$ = this.appService.getProductByCode(params['id']).pipe(
        take(1),
        tap((responseProduct) => {
          const { productSelected } = responseProduct;
          this.productSelected = productSelected;
          this.productSelected.initialValue = getPrice(
            this.productSelected.stockPrice.price
          );
          this.resetSelectedSku();
          this.productSelected.skus[0].selected = true;
          this.codeSelect = this.productSelected.skus[0].code;
        })
      );
    });

    source
      .pipe(
        takeUntil(this.unsubscribe),
        tap(() => {
          this.changeSku(this.codeSelect, this.indexSelected);
        })
      )
      .subscribe();
  }

  resetSelectedSku() {
    this.productSelected.skus.forEach((sku) => {
      sku.selected = false;
    });
  }

  toggleReadMore() {
    this.readMore = !this.readMore;
  }

  toHomeScreen() {
    this.router.navigate(['/']);
  }

  changeSku(code: string, index: number) {
    this.codeSelect = code;
    this.indexSelected = index;

    this.appService
      .getStockPriceById(code)
      .pipe(
        take(1),
        tap((res) => {
          const { stockPrice } = res;
          this.productSelected.stockPrice = stockPrice;
          this.productSelected.initialValue = getPrice(
            this.productSelected.stockPrice.price
          );
          this.resetSelectedSku();
          this.productSelected.skus[this.indexSelected].selected = true;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
