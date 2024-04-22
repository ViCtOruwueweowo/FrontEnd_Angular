import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Valorations } from '../core/interfaces/valorations';
import { Users } from '../core/interfaces/users';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { UsersService } from '../core/service/users.service';
import { ValorationsService } from '../core/service/valorations.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-registro-valoracion',
  standalone: true,
  imports: [NavbarComponent,CommonModule,ReactiveFormsModule,FormsModule,NgFor,NgIf],
  templateUrl: './form-registro-valoracion.component.html',
  styleUrl: './form-registro-valoracion.component.css'
})
export class FormRegistroValoracionComponent {
  form!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private gamesService:GamesService,
    private usersService: UsersService,
    private valorationsService:ValorationsService,
    private router:Router,
    private http:HttpClient
  ){}

  public valorations:Valorations={
    id:'',
    user_name:'',
    videogame_name:'',
    estrellas:'',
    user_id:'',
    videogame_id:'',
  }

  token!: string;
  gamesList:Games[]=[];

ngOnInit():void{
  this.getgames();

  this.token = localStorage.getItem('token') || '';
  this.form = this.formBuilder.group({
    videogame_id: ['', Validators.required],
    estrellas: ['', Validators.required]
  });
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


public createValoration() {
  this.valorationsService.createvaloration(this.valorations).subscribe(
    (response) => {
      this.router.navigate(['/Valorations']);
    },
    (error) => {
      console.error('Error al crear la valoración:', error);
    }
  );
}
}
