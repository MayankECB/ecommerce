import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartManagementComponent } from './cart-management/cart-management.component';

const routes: Routes = [
  { path: '', component: CartManagementComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class OrderManagementRoutingModule { 
    constructor(){
        
    }
}
