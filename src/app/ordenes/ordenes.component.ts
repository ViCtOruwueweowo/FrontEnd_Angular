import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Orders } from '../core/interfaces/orders';
import { OrdersService } from '../core/service/orders.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [NavbarComponent, RouterLink,NgFor],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {
orderList:Orders[]=[];

constructor(private ordersService:OrdersService){}

ngOnInit():void{
  this.getorder();
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

}
