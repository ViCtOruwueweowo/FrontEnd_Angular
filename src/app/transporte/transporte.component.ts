import { Component, OnInit } from '@angular/core';
import { ShippersService } from '../core/services/shippers.service';
import { Shippers } from '../core/interfaces/shippers';
import { FormRegistroTransporteComponent } from '../form-registro-transporte/form-registro-transporte.component';
import { RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [FormRegistroTransporteComponent, RouterLink,IndexComponent],
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
