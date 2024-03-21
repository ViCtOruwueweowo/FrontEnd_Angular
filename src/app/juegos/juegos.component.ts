import { Component, OnInit } from '@angular/core';
import { GamesService } from '../core/service/games.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Games } from '../core/interfaces/games';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [NavbarComponent, RouterLink],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})

export class JuegosComponent {
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

deleteGame(id: string){
  this.gamesService.deleteGame(id).subscribe(
    (response) => {
       console.log('Proveedor eliminado exitosamente!');
       this.getgame();
    },
    (error) => {
      console.error(error);
    }
  )
}
}