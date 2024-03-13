import { Component, OnInit } from '@angular/core';
import { ShippersService } from '../core/services/shippers.service';
import { Shippers } from '../core/interfaces/shippers';
@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [],
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent implements OnInit{
shippersList: Shippers[]=[];

constructor(private shippersService:ShippersService){}

ngOnInit(): void {
    this.getShippers();
}

getShippers(){
  this.shippersService.getShipper().subscribe({
    next: (result) => {
      this.shippersList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
