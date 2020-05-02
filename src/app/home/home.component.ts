import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { HttpClient } from '@angular/common/http';
import  * as data from  '../../assets/json/products.json';
import { ProductItem } from '../model/product.model';
import { Product } from '../model/product.interface';
//import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: ProductItem[] = [];
  productItem: ProductItem;
  product: Product;
  size: number;
  color: string;
  quantity: number;

  constructor(private dataService: DataService,
    private httpClient: HttpClient,
  //  private toastr: ToastrService,
    private router: Router) {     
    this.getProductList();
  }
  
  showSuccess(message, title){
//    this.toastr.success(message, title)
  }

  showError(message, title){
//      this.toastr.error(message, title)
  }

  showInfo(message, title){
//      this.toastr.info(message, title)
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

  quickView(productSelected:Product){
    alert(productSelected.productId)
    this.router.navigate(['/product-details', productSelected.productId]);
  }
  
  addToWishList(productSelected:Product){
    // this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
    //   timeOut: 3000,
    //   toastClass: 'toast-header',
    //   progressBar: true,
    //   progressAnimation: 'decreasing',
    //   closeButton: true,
    //   enableHtml: true
    // });
  }

  addToCart(productSelected:Product){
    alert(this.size+' - addToCart() - '+this.color)
    console.log(productSelected)
    // let product: CartProduct;
    // this.productService.getProductDetailsById(this.productId)
    // .subscribe(p => {
    //   product = p as CartProduct;
    //   product.Quantity = this.quantity;
    //   product.SizeId = this.sizeId;
    //   product.ColorId = this.colorId;
    //   let cart: CartProduct[] = JSON.parse(localStorage.getItem('Cart'));
    //   if(cart == null){
    //     cart = [];
    //     cart.push(product);
    //   } else{
    //     let currentProduct = cart.filter(a => a.ProductId == product.ProductId);
    //     if(currentProduct.length > 0){
    //       cart.filter(a => {
    //         a.Quantity = a.Quantity + this.quantity;
    //       });
    //     } else{
    //       cart.push(product);
    //     }
    //   }
    //   this.dataService.updateCartItemCount(cart.length);
    //   this.dataService.updateShoppingCart(cart);
    //   localStorage.setItem('Cart', JSON.stringify(cart));
    //   this.toastr.success('<i class="fas fa-check ml-1 pr-2"></i><strong>Product Added to the Cart</strong>', null, {
    //     timeOut: 3000,
    //     toastClass: 'toast-header',
    //     progressBar: true,
    //     progressAnimation: 'decreasing',
    //     closeButton: true,
    //     enableHtml: true
    //   });
    // });
    
  }

}
