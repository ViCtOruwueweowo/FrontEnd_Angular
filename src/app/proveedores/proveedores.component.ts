import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../core/services/providers.service';
import { Providers } from '../core/interfaces/providers';
import { FormRegistroProveedorComponent } from '../form-registro-proveedor/form-registro-proveedor.component';
import {  Router, RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import {  Route } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [FormRegistroProveedorComponent, RouterLink,IndexComponent, FormRegistroProveedorComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit {
  providersList: Providers[]=[];

  constructor(private providersService:ProvidersService, private router: Router){}

  ngOnInit(): void {
      this.getProviders();
  }

  getProviders(){
    this.providersService.getProvider().subscribe({
      next: (result) => {
        this.providersList = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteProvider(id: string){
    this.providersService.deleteProvider(id).subscribe(
      (response) => {
         console.log('Proveedor eliminado exitosamente!');
         this.getProviders();
      },
      (error) => {
        console.error(error);
      }
    )
  }

  public modifyProvider(id: string){
    this.providersService.updateProvider(id).subscribe(
      (provider) => {
        this.router.navigate(['/FormEditarProveedor/', id]);
      },
      (error) => {
        console.error(error);
      }
    )
  }
  
}
