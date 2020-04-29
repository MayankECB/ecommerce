import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductReviewComponent } from './product-review/product-review.component';



@NgModule({
  declarations: [ProductSearchComponent, ProductCatalogueComponent, ProductReviewComponent],
  imports: [
    CommonModule
  ]
})
export class ProductManagementModule { }
