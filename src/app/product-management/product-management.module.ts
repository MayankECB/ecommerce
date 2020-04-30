import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductCatalogueComponent } from './product-catalogue/product-catalogue.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductManagementRoutingModule } from './product-management-routing.module';



@NgModule({
  declarations: [ProductSearchComponent, ProductCatalogueComponent, ProductReviewComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
