import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor(private httpClient: HttpClient) { }

  
  getProductDetailsById(productId: number) {
    return this.httpClient.get('assets/json/products.json');
  }

}
