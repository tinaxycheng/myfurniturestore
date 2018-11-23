import { CartService } from './cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private CartService: CartService, private router: Router) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.CartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }
  get(orderId) { 
    return this.db.object('/orders/' + orderId);
  }
  getItems(orderId) { 
    return this.db.object('/orders/' + orderId + '/items');
  }

}
