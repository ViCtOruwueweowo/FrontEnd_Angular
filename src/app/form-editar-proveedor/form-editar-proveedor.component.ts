import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../core/services/providers.service';
import { Providers } from '../core/interfaces/providers';
import { Router } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-editar-proveedor',
  standalone: true,
  imports: [IndexComponent, FormsModule],
  templateUrl: './form-editar-proveedor.component.html',
  styleUrl: './form-editar-proveedor.component.css'
})
export class FormEditarProveedorComponent implements OnInit {
  public provider:Providers={
    id:'',
    nombre:'',
    direccion:'',
    contacto:''
  }
  constructor(
    private providersService: ProvidersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Aquí puedes obtener el proveedor que deseas editar
    // y asignarlo a this.provider
  }

  public isFormComplete() {
    return this.provider.nombre && this.provider.direccion && this.provider.contacto;
  }
  

  public updateProvider(){
    this.providersService.updateProvider(this.provider.id).subscribe(
      (response) => {
        // Navega de regreso a la página de proveedores después de actualizar el proveedor
        this.router.navigate(['/Proveedores']);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}