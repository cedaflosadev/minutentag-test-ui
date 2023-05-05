import { StockPrice } from './stock-price.interface';

export interface Product {
  abv: string;
  brand: string;
  id: number;
  image: string;
  information: string;
  origin: string;
  skus: SKU[];
  style: string;
  substyle: string;
  initialValue: string;
  stockPrice: StockPrice;
}

export interface SKU {
  code: string;
  name: string;
  selected?: boolean;
}
