import { Component, Provider } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { Providers } from '../core/interfaces/providers';
import { ProvidersService } from '../core/service/providers.service';
import { GamespService } from '../core/service/gamesp.service';
import { Router } from '@angular/router';
import { Gamesp } from '../core/interfaces/gamesp';

@Component({
  selector: 'app-form-registro-juegop',
  standalone: true,
  imports: [NavbarComponent, CommonModule, NgIf, NgFor,FormsModule,ReactiveFormsModule],
  templateUrl: './form-registro-juegop.component.html',
  styleUrl: './form-registro-juegop.component.css'
})
export class FormRegistroJuegopComponent {
  public gamesp:Gamesp={
    id:'',
    videogame_name:'',
    videogame_id:'',
    provider_id:'',
    provider_name:'',
  }
  
  //Esto Es Para Obtener Mis Datos
  gamesList:Games[]=[];
  providersList: Providers[]=[];
  
  //Uso De Los Servicios
  constructor
  ( private formBuilder:FormBuilder,
    private gamesService:GamesService,
    private providersService:ProvidersService,
    private gamespService:GamespService,
    private router:Router
  ){
  }
  
  ngOnInit():void{
    this.getgame();
    this.getProviders();
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
  
  getProviders(){
    this.providersService.getProvider().subscribe({
      next: (result) => {
        this.providersList = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  
  public createGamesP(){
    this.gamespService.createGamep(this.gamesp).subscribe(
      (response)=>{
        this.router.navigate(['/GamePro'])
      }
    )
  }
  
  //Validacion Del Formulario

  formgamep = this.formBuilder.group({
    videogame_id:['', [Validators.required]],
    provider_id:['', [Validators.required]],
  })

  get videogame_id() {
    return this.formgamep.controls.videogame_id
  }
  get provider_id() {
    return this.formgamep.controls.provider_id
  }
  }