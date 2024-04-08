import { Component, OnInit } from '@angular/core';
import { GamesService } from '../core/service/games.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Games } from '../core/interfaces/games';
import { RouterLink } from '@angular/router';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { GendersService } from '../core/service/genders.service';
import { Genders } from '../core/interfaces/genders';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [NavbarComponent, RouterLink, CommonModule,ReactiveFormsModule,FormsModule,NgFor, NgIf],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})

export class JuegosComponent {
gamesList:Games[]=[];
gendersList:Genders[]=[];
selectedGame:Games;

constructor(
  private gendersService:GendersService,
  private gamesService:GamesService)
{this.selectedGame={} as Games;}

ngOnInit():void{
  this.getgame();
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

getMyGame(id: string) {
  this.gamesService.getMyGame(id).subscribe(
    (result: any) => {
      console.log('Acción realizada con éxito:');
      this.selectedGame = result.data;
    },
    (error) => {
      console.error('Error al obtener el envío:', error);
    }
  );
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

updateGame() {
  this.gamesService.putGame(this.selectedGame.id, this.selectedGame).subscribe(
    (result: any) => {
      console.log('Acción realizada con éxito:');
      // Actualiza la lista de shippers para reflejar los cambios
      this.getgame();
      location.reload()
    },
    (error) => {
      console.error('Error al actualizar el envío:', error);
    }
  );
}
}