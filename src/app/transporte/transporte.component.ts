import { Component, OnInit } from '@angular/core';
import { ShippersService } from '../core/service/shippers.service';
import { Shippers } from '../core/interfaces/shippers';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [ RouterLink,NavbarComponent,FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent implements OnInit{




shippersList: Shippers[]=[];


constructor(
  private formBuilder:FormBuilder,
  private shippersService:ShippersService)
  {this.selectedShipper = {} as Shippers;}

  ngOnInit(): void {
    this.getShippers();
  }


selectedShipper: Shippers;

updateShipper() {
  this.shippersService.putShipper(this.selectedShipper.id, this.selectedShipper).subscribe(
    (result: any) => {
      console.log('Acción realizada con éxito:');
      // Actualiza la lista de shippers para reflejar los cambios
      this.getShippers();
      location.reload()
    },
    (error) => {
      console.error('Error al actualizar el envío:', error);
    }
  );
}


getMyShipper(id: string) {
  this.shippersService.getMyShipper(id).subscribe(
    (result: any) => {
      console.log('Acción realizada con éxito:');
      this.selectedShipper = result.data;
    },
    (error) => {
      console.error('Error al obtener el envío:', error);
    }
  );
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
