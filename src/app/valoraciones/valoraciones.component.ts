import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { Valorations } from '../core/interfaces/valorations';
import { ValorationsService } from '../core/service/valorations.service';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [NavbarComponent,NgFor,RouterLink,NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css'
})
export class ValoracionesComponent {
valorationList:Valorations[]=[]

constructor(private valorationsService:ValorationsService)
{this.selectedValoration={} as Valorations}

selectedValoration:Valorations;

ngOnInit():void{
  this.getValorations();
}

getValorations(): void {
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
}