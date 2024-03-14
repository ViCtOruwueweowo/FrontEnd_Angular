import { Component } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Providers } from '../core/interfaces/providers';
import { ProvidersService } from '../core/services/providers.service';

@Component({
  selector: 'app-form-registro-proveedor',
  standalone: true,
  imports: [IndexComponent, RouterLink, RouterModule,NgIf, FormsModule, ReactiveFormsModule],
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

public isFormComplete() {
  return this.provider.nombre && this.provider.direccion && this.provider.contacto;
}

public createProvider(){
  this.providersService.createProvider(this.provider).subscribe(
    (response) => {
         this.router.navigate(['/Providers']);
    },
    (error) => {
      if (error.status == 401) {
        this.router.navigate(['/']);
      }
    }
  )
}


}