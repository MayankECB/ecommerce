import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;

  constructor(private router: Router) { 
    }

  ngOnInit() {
  }

  openWishlistPage(){
    this.router.navigate(['/wishlist']);
  }

  openCartPage(){
    this.router.navigate(['/shopping-cart']);
  }
}
