import { Component, OnInit, numberAttribute } from '@angular/core';
import { ProvidersService } from '../core/service/providers.service';
import { Providers } from '../core/interfaces/providers';
import {  Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [ RouterLink, NavbarComponent,FormsModule,ReactiveFormsModule, NgIf],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit {


  providersList: Providers[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private providersService:ProvidersService, 
    private router: Router){}

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
  
}
