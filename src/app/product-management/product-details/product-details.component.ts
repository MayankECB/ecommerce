import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.interface';
import { ProductItem } from 'src/app/model/product.model';
import { ProductManagementService } from '../services/product-management-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductItem;
  productId: number;
  sizeId: number;
  colorId: number;
  color: string;
  size: string;
  quantity: number;

  constructor(private route: ActivatedRoute,
    private productService: ProductManagementService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId']; 
    });

    this.getProductDetailsById(this.productId);
  }

  onAddProductToCart(){
    alert('onAddProductToCart')
  }

  getProductDetailsById(id:number){
    this.productService.getProductDetailsById(id)
    .subscribe((response:any) => {
      for(var index of response.Products){
        if(index.productId == this.productId){
          this.product = new ProductItem(index as Product);
        }
      }
    })
  }

}
