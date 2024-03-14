import { Component, OnInit } from '@angular/core';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/services/games.service';
import { FormRegistroJuegosComponent } from '../form-registro-juegos/form-registro-juegos.component';
import { RouterLink } from '@angular/router';
import { IndexComponent } from '../index/index.component';
@Component({
  selector: 'app-video-juegos',
  standalone: true,
  imports: [FormRegistroJuegosComponent, RouterLink,IndexComponent],
  templateUrl: './video-juegos.component.html',
  styleUrl: './video-juegos.component.css'
})

export class VideoJuegosComponent {
gamesList:Games[]=[];

constructor(private gameService:GamesService){}

ngOnInit(): void {
  this.getGame();
}

getGame() {
  this.gameService.getGame().subscribe({
    next: (result) => {
      this.gamesList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
