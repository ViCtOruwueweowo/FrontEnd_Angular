import { Component, OnInit } from '@angular/core';
import { Orders } from '../core/interfaces/orders';
import { OrdersService } from '../core/services/orders.service';
@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css'
})
export class OrdenComponent {
orderList:Orders[]=[];

constructor (private orderService:OrdersService){}

ngOnInit(): void {
  this.getOrders();
}


getOrders(){
  this.orderService.getOrder().subscribe({
    next: (result) => {
      this.orderList = result[0];
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
