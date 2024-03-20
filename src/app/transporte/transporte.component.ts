import { Component, OnInit } from '@angular/core';
import { ShippersService } from '../core/service/shippers.service';
import { Shippers } from '../core/interfaces/shippers';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [ RouterLink,NavbarComponent],
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

deleteShipper(id:string){
  this.shippersService.deleteShipper(id).subscribe(
    (response)=>{
      console.log('Accion Realizada Con Exito');
      this.getShippers();
    },
    (error)=>{
      console.error(error)
    }
  )
}
}
