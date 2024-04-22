import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';
import { Valorations } from '../core/interfaces/valorations';
import { ValorationsService } from '../core/service/valorations.service';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-valoraciones',
  standalone: true,
  imports: [NavbarComponent,NgFor,RouterLink,NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './valoraciones.component.html',
  styleUrl: './valoraciones.component.css'
})
export class ValoracionesComponent implements OnInit {

  valorationList: Valorations[] = []
  valorationsForm = new FormGroup({
    estrellas: new FormControl()
  });
  selectedValoration: Valorations;

  constructor(private valorationsService: ValorationsService) {
    this.selectedValoration = {} as Valorations
  }

  ngOnInit(): void {
    this.getValorations();
  }

  getValorations(): void {
    this.valorationsService.getValoration().subscribe(
      (result) => {
        this.valorationList = result.data;
      },
      (err) => {
        console.error('Error al obtener las valoraciones:', err);
      }
    );
  }

  getMyValoration(id: string) {
    this.valorationsService.getMyValoration(id).subscribe(
      (result: any) => {
        console.log('Acción realizada con éxito:');
        this.selectedValoration = result.data;
      },
      (error) => {
        console.error('Error al obtener el envío:', error);
      }
    );
  }

  updateValo() {
    this.valorationsService.putValoration(this.selectedValoration.id, this.selectedValoration).subscribe(
      (result: any) => {
        console.log('Acción realizada con éxito:');
        this.getValorations();
        location.reload()
      },
      (error) => {
        console.error('Error al actualizar el envío:', error);
      }
    );
  }
}