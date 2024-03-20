import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Shippers } from '../core/interfaces/shippers';
import { ShippersService } from '../core/service/shippers.service';
import { Router,RouterLink,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-registro-transporte',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './form-registro-transporte.component.html',
  styleUrl: './form-registro-transporte.component.css'
})
export class FormRegistroTransporteComponent {

public shippers:Shippers={
  id:'',
  name:'',
  direccion:'',
  email_contacto:'',
}

constructor(
  private shippersService:ShippersService,
  private router:Router
){}

public createShippers(){
this.shippersService.createShippers(this.shippers).subscribe(
  (response)=>{
    this.router.navigate(['/Transport']);
  }
)
}
}
