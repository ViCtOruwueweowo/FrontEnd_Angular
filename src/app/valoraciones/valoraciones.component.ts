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
  this.getvaloration();
}

getvaloration(){
  this.valorationsService.getValoration().subscribe({
    next:(result)=>{
      this.valorationList=result.data;
    },
    error: (err) => {
      console.log(err);
    }
  })
}
}
