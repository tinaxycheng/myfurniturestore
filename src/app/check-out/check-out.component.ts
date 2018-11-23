import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../shoppingcart';
import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{ 
  cart$: Observable<ShoppingCart>;
  
  constructor(private CartService: CartService) {}
  
  async ngOnInit() { 
    this.cart$ = await this.CartService.getCart();
  }
}