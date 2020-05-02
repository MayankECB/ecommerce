import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';
import { Product } from '../model/product.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getProductList() {
    return this.httpClient.get('assets/json/products.json');
  }

  fetchProductList(): Observable<any> {
    return this.httpClient.get('/api/getproductlist');
  }

  fetchKartList() {
    return this.httpClient.get('/api/getUserKart');
  }

  removeCart(productId: string) {
    return this.httpClient.post('/api/removeCart', productId);
  }


}
