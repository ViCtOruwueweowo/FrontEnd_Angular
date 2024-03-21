import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro-juego',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './form-registro-juego.component.html',
  styleUrl: './form-registro-juego.component.css'
})
export class FormRegistroJuegoComponent {
public games:Games={
  id:'',
  nombre:'',
  genre:'',
  unitPrice:'',
  description:'',
  inStock:'',
}

constructor(
  private gamesService:GamesService,
  private router:Router
){}

public createGames(){
  this.gamesService.createGame(this.games).subscribe(
    (response)=>{
      this.router.navigate(['/Games'])
    }
  )
}
}
