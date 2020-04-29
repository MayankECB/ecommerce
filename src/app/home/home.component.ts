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
  productItem:ProductItem;

  constructor(private dataService: DataService,
    private httpClient: HttpClient) { 
    this.dataService.fetchProductList().subscribe((response:any)=>{
      
    for(let index of data.Products){          
          this.productList.push(new ProductItem(index.id, index.name, index.imageUrl, index.description,
            index.price, index.discount,index.discountedPrice, index.offerLabel, index.rating))
        }
      },
      error => {
        console.log('Error while fetching product list',error)
      });
  }

  ngOnInit() {
    console.log(this.productList.length,'--this.productList--',this.productList)    
  }

  addToCart(){
    alert('addToCart()')
  }
}
