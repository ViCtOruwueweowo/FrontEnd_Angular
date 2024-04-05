import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Valorations } from '../core/interfaces/valorations';
import { Users } from '../core/interfaces/users';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { UsersService } from '../core/service/users.service';
import { ValorationsService } from '../core/service/valorations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-registro-valoracion',
  standalone: true,
  imports: [NavbarComponent,CommonModule,ReactiveFormsModule,FormsModule,NgFor,NgIf],
  templateUrl: './form-registro-valoracion.component.html',
  styleUrl: './form-registro-valoracion.component.css'
})
export class FormRegistroValoracionComponent {

  constructor(
    private formBuilder:FormBuilder,
    private gamesService:GamesService,
    private usersService: UsersService,
    private valorationsService:ValorationsService,
    private router:Router
  ){}

  public valorations:Valorations={
    user_name:'',
    videogame_name:'',
    estrellas:'',
  }

  usersList:Users[]=[];
  gamesList:Games[]=[];

ngOnInit():void{
  this.getgames();
  this.getusers();
}

getgames() {
  this.gamesService.getgame().subscribe({
    next: (result) => {
      this.gamesList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

getusers() {
  this.usersService.getUser().subscribe({
    next: (result) => {
      this.usersList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
