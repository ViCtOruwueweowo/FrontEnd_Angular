import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Orders } from '../core/interfaces/orders';
import { OrdersService } from '../core/service/orders.service';
import { NgFor } from '@angular/common';
import { Ordersd } from '../core/interfaces/ordersd';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [NavbarComponent, RouterLink,NgFor],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
orderList:Orders[]=[];
orderdList:Ordersd[]=[];

constructor(private ordersService:OrdersService){}

ngOnInit():void{
  this.getorder();
  this.getorderd();
}

getorder() {
  this.ordersService.getorder().subscribe({
    next: (result) => {
      this.orderList = result[0];
    },
    error: (error) => {
      console.error('Error fetching orders:', error);
    }
  });
}

getorderd() {
  this.ordersService.getorderd().subscribe({
    next: (result) => {
      this.orderdList = result[0];
    },
    error: (error) => {
      console.error('Error fetching orders:', error);
    }
  });
}
}
