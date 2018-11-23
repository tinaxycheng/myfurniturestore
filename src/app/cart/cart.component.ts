import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart$;

  constructor(private CartService: CartService) { }

  async ngOnInit() {
    this.cart$ = await this.CartService.getCart();
  }

  clearCart() { 
    this.CartService.clearCart();
  }
}