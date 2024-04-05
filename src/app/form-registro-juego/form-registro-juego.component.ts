import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Games } from '../core/interfaces/games';
import { GamesService } from '../core/service/games.service';
import { Router } from '@angular/router';
import { Genders } from '../core/interfaces/genders';
import { GendersService } from '../core/service/genders.service';
import { CommonModule, NgFor , NgIf} from '@angular/common';

@Component({
  selector: 'app-form-registro-juego',
  standalone: true,
  imports: [NgIf,CommonModule,NavbarComponent,ReactiveFormsModule,FormsModule,NgFor],
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
  genre_id:''
}

formgames = this.formBuilder.group({
  nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
  genre_id: ['', [Validators.required]],
  unitPrice: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
  description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
  inStock: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
})

get nombre() {
  return this.formgames.controls.nombre
}
get  genre_id() {
  return this.formgames.controls.genre_id
}
get unitPrice() {
  return this.formgames.controls.unitPrice
}
get description() {
  return this.formgames.controls.unitPrice
}
get inStock() {
  return this.formgames.controls.inStock
}



gendersList:Genders[]=[];

constructor(
  private formBuilder:FormBuilder,
  private gendersService:GendersService,
  private gamesService:GamesService,
  private router:Router
){}

loading: boolean = false;
message: string = '';
imageUrl: string = '';


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

public createGames(){
  this.loading = true;
  this.imageUrl = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700';
  this.gamesService.createGame(this.games).subscribe(
    (response)=>{
      this.loading = false;
      this.router.navigate(['/Games'])
    },
    (error) => {
      this.loading = false;
      if (error.status === 422) {
        this.router.navigate(['/FGames']);
      }
    }
  )
}
}
