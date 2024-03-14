import { Component, OnInit } from '@angular/core';
import { Orders } from '../core/interfaces/orders';
import { OrdersService } from '../core/services/orders.service';
import { FormRegistroOrdenComponent } from '../form-registro-orden/form-registro-orden.component';
import { RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [FormRegistroOrdenComponent, RouterLink,IndexComponent],
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
