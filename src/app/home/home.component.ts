import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';
import { ProductItem } from '../model/product.model';
import { Product } from '../model/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: ProductItem[] = [];
  productItem: ProductItem;
  product: Product;

  constructor(private dataService: DataService,
    private httpClient: HttpClient) {     
    this.getProductList();
  }

  getProductList(){
    this.dataService.getProductList().subscribe((response:any)=>{
      for(var index of response.Products){
        this.productList.push(index as Product)
      }
    })
  }
  ngOnInit() {
    console.log(this.productList.length,'--this.productList--',this.productList)    
  }
  
  counter(i: number) {
    return new Array(i);
  }

  addToCart(){
    alert('addToCart()')
    let product: CartProduct;
    this.productService.getProductDetailsById(this.productId)
    .subscribe(p => {
      product = p as CartProduct;
      product.Quantity = this.quantity;
      product.SizeId = this.sizeId;
      product.ColorId = this.colorId;
      let cart: CartProduct[] = JSON.parse(localStorage.getItem('Cart'));
      if(cart == null){
        cart = [];
        cart.push(product);
      } else{
        let currentProduct = cart.filter(a => a.ProductId == product.ProductId);
        if(currentProduct.length > 0){
          cart.filter(a => {
            a.Quantity = a.Quantity + this.quantity;
          });
        } else{
          cart.push(product);
        }
      }
      this.dataService.updateCartItemCount(cart.length);
      this.dataService.updateShoppingCart(cart);
      localStorage.setItem('Cart', JSON.stringify(cart));
      this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
        timeOut: 3000,
        toastClass: 'toast-header',
        progressBar: true,
        progressAnimation: 'decreasing',
        closeButton: true,
        enableHtml: true
      });
    });
    
  }

}
