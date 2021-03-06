import { Product } from '../product';
import { ProductService } from '../product.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  @Input('product') product: Product;


  constructor(
    private productService: ProductService
  ) {
    this.products$=this.productService.getAll();
  }

  ngOnInit() {
  }

}
