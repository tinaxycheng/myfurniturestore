import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id;
  order = {};
  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private OrderService: OrderService
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
      
    this.OrderService.get(this.id).pipe(take(1)).subscribe(p => this.order = p);

     }

  ngOnInit() {
  }

}
