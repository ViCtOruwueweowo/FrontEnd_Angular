import { Component, OnInit } from '@angular/core';
import { GamesService } from '../core/service/games.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Games } from '../core/interfaces/games';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [NavbarComponent, NgFor],
  templateUrl: './generos.component.html',
  styleUrl: './generos.component.css'
})
export class GenerosComponent {


  gamesList:Games[]=[];

  constructor(private gamesService:GamesService){}
  

  ngOnInit():void{
    this.getgame();
  }
  
  getgame() {
    this.gamesService.getgame().subscribe({
      next: (result) => {
        this.gamesList = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
