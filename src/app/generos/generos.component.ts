import { Component, OnInit } from '@angular/core';
import { GamesService } from '../core/service/games.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Games } from '../core/interfaces/games';
import { NgFor, NgIf } from '@angular/common';
import { Genders } from '../core/interfaces/genders';
import { GendersService } from '../core/service/genders.service';
@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [NavbarComponent, NgFor, NgIf],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {

  gendersList:Genders[]=[];

  constructor(private gendersService:GendersService){}
  

  ngOnInit():void{
    this.getgender();
  }
  
  getgender() {
    this.gendersService.getgender().subscribe({
      next: (result) => {
        this.gendersList = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
