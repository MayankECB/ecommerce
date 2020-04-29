import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  fetchProductList() {
    return this.httpClient.get('/api/getproductlist');
  }

  fetchKartList() {
    return this.httpClient.get('/api/getUserKart');
  }

  addToCart(productId: string) {
    return this.httpClient.post('/api/addCart', productId);
  }

  removeCart(productId: string) {
    return this.httpClient.post('/api/removeCart', productId);
  }


}
