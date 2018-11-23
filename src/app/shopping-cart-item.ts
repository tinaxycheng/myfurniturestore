import { Product } from './product';

export class ShoppingCartItem {
  $key: string;
  name: string;
  product_img: string;
  price: number; 
  quantity: number; 
    name2: any;

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() { return this.price * this.quantity; }
}
