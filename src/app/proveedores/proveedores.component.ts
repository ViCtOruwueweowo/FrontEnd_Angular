import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../core/services/providers.service';
import { Providers } from '../core/interfaces/providers';


@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit {
  providersList: Providers[]=[];

  constructor(private providersService:ProvidersService){}

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
}
