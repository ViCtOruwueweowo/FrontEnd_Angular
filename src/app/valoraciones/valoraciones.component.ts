import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor } from '@angular/common';
import { Valorations } from '../core/interfaces/valorations';
import { ValorationsService } from '../core/service/valorations.service';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css'
})
export class ValoracionesComponent {
valorationList:Valorations[]=[]

constructor(private valorationsService:ValorationsService){}

ngOnInit():void{
  this.getValorations();
}

getValorations(): void {
  const token = this.obtenerTokenDelLocalStorage();
  if (!token) {
    console.error('El token no está presente en el localStorage.');
    return;
  }

  // Agrega el token a la solicitud HTTP (por ejemplo, en los encabezados)
  const headers = { Authorization: `Bearer ${token}` };

  this.valorationsService.getValoration().subscribe(
    (result) => {
      // Maneja la respuesta exitosa aquí
      this.valorationList = result.data; // Asigna los datos a la lista de valoraciones
    },
    (err) => {
      // Maneja el error aquí (por ejemplo, muestra un mensaje de error)
      console.error('Error al obtener las valoraciones:', err);
    }
  );
}

private obtenerTokenDelLocalStorage(): string | null {
  const localStorage = window.localStorage;
  return localStorage.getItem('mi_token');
}
}
