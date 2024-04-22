import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Gamesp } from '../core/interfaces/gamesp';
import { GamespService } from '../core/service/gamesp.service';
import { RouterLink } from '@angular/router';
import { Providers } from '../core/interfaces/providers';
import { ProvidersService } from '../core/service/providers.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego-proveedor',
  standalone: true,
  imports: [NavbarComponent,RouterLink,CommonModule,FormsModule,ReactiveFormsModule,NgFor,NgIf],
  templateUrl: './juego-proveedor.component.html',
  styleUrl: './juego-proveedor.component.css'
})
export class JuegoProveedorComponent {

gamespList:Gamesp[]=[];
providersList:Providers[]=[];
selectdproviders:Providers;

constructor
(
private gamespService:GamespService,
private providersService:ProvidersService
){this.selectdproviders={} as Providers}

ngOnInit(): void {
  this.getGamesp();
}

getGamesp(){
  this.gamespService.getgamep().subscribe({
    next: (result) => {
      this.gamespList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

getMyProvider(id: string) {
  this.providersService.getMyProvider(id).subscribe(
    (result: any) => {
      console.log('Acción realizada con éxito:');
      this.selectdproviders = result.data;
    },
    (error) => {
      console.error('Error al obtener el envío:', error);
    }
  );
}
}
