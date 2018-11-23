import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import 'rxjs/add/operator/map';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]  

})
export class ProductsComponent implements OnInit{
  products$;
  @Input('product') product: Product;


  constructor(
    private productService: ProductService,private cartService: CartService
  ) {
    this.products$=this.productService.getAll();
  }

  ngOnInit(){

  }
  addToCart(item) {
    this.cartService.addToCart(item);
  }

 }
	
