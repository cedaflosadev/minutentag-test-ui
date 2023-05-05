import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<any> {
    return this.http.get('http://localhost:4001/api/products');
  }
  public getAllStockPrice(): Observable<any> {
    return this.http.get('http://localhost:4001/api/allStockPrice');
  }

  public getProductByCode(idProduct: string): Observable<any> {
    return this.http.get(`http://localhost:4001/api/product/${idProduct}`);
  }

  public getStockPriceById(idStockPrice: string): Observable<any> {
    return this.http.get(`http://localhost:4001/api/stockprice/${idStockPrice}`);
  }
}
