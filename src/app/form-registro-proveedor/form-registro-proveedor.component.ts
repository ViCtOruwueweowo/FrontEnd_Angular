import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Providers } from '../core/interfaces/providers';
import { ProvidersService } from '../core/service/providers.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-form-registro-proveedor',
  standalone: true,
  imports: [ RouterLink, RouterModule,NgIf, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './form-registro-proveedor.component.html',
  styleUrl: './form-registro-proveedor.component.css'
})

export class FormRegistroProveedorComponent {
public provider:Providers={
  id:'',
  nombre:'',
  direccion:'',
  contacto:''
}

constructor(
  private providersService:ProvidersService,
  private router:Router
){}

public createProvider(){
  this.providersService.createProvider(this.provider).subscribe(
    (response) => {
         this.router.navigate(['/Provider']);
    },
    (error) => {
      if (error.status == 401) {
        this.router.navigate(['/']);
      }
    }
  )
}


}