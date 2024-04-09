import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { Orders } from '../core/interfaces/orders';
import { OrdersService } from '../core/service/orders.service';
import { NgFor, NgIf } from '@angular/common';
import { Ordersd } from '../core/interfaces/ordersd';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [NavbarComponent, RouterLink,NgFor,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './ordenes.component.html',
  styleUrl: './ordenes.component.css'
})
export class OrdenesComponent {

  public orders:Orders={
    user_name:'',
    id:'',
    shipper_name:'',
    state:'',
    state_id:'',
    user_id:'',
    shipper_id:'',
  }

orderList:Orders[]=[];
orderdList:Ordersd[]=[];
gamesList:Games[]=[];

constructor(
  private gamesService:GamesService,
  private ordersService:OrdersService){}

ngOnInit():void{
  this.getgame();
  this.getorder();
  this.getorderd();
  this.orders.state_id = '1'; 
  this.orders.shipper_id = '1';
  this.orders.user_id = '1'; 
}

getgame() {
  this.gamesService.getgame().subscribe({
    next: (result) => {
      this.gamesList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
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
      this.orderdList = result; // Asigna los datos de la respuesta a 'this.orderdList'
    },
    error: (error) => {
      console.error('Error fetching orders:', error);
    }
  });
}

public createOrder(){
  this.ordersService.createOrder(this.orders).subscribe(
    (response)=>{
      
    }
  )
}
}
