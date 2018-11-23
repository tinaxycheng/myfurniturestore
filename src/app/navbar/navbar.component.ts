import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from '../shoppingcart';


import{ AuthService } from '../auth.service';
import { AppUser } from '../appuser';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService, private CartService: CartService ) { 

  }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser= appUser);
    this.cart$ = await this.CartService.getCart();
  }
  logout(){
    this.auth.logout();
  }
}
