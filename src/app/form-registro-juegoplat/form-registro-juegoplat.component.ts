import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GamesService } from '../core/service/games.service';
import { UsersService } from '../core/service/users.service';
import { PlatformsService } from '../core/service/platforms.service';
import { Router, RouterLink } from '@angular/router';
import { Games } from '../core/interfaces/games';
import { Platforms } from '../core/interfaces/platforms';
import { Platform2 } from '../core/interfaces/platform2';

@Component({
  selector: 'app-form-registro-juegoplat',
  standalone: true,
  imports: [NavbarComponent, CommonModule, NgIf, ReactiveFormsModule, FormsModule, NgFor, RouterLink],
  templateUrl: './form-registro-juegoplat.component.html',
  styleUrl: './form-registro-juegoplat.component.css'
})
export class FormRegistroJuegoplatComponent {
constructor(
  private formBuilder:FormBuilder,
  private gameService:GamesService,
  private platformService:PlatformsService,
  private router:Router
){}
platformsForm = new FormGroup({
  videogame_id: new FormControl(),
  platform_id: new FormControl()
});

public platforms:Platforms={
  id:'',
  platform_name:'',
  videogame_name:'',
  platform_id:'',
  videogame_id:'',
}

gamesList:Games[]=[];
platformList:Platform2[]=[]

ngOnInit():void{
  this.getgames();
  this.getplatforms();
}

getgames() {
  this.gameService.getgame().subscribe({
    next: (result) => {
      this.gamesList= result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}

getplatforms() {
  this.platformService.getplatform2().subscribe({
    next: (result) => {
      this.platformList= result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}


public createplatforms(){
  this.platformService.createplatforms(this.platforms).subscribe(
    (response)=>{
      this.router.navigate(['/Platform'])
    },
    (error) => {
        this.router.navigate(['/FGamesFGamePlat']);
      }
    )
}
}
