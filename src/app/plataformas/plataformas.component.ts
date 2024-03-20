import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Platforms } from '../core/interfaces/platforms';
import { PlatformsService } from '../core/service/platforms.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-plataformas',
  standalone: true,
  imports: [NavbarComponent,NgFor],
  templateUrl: './plataformas.component.html',
  styleUrl: './plataformas.component.css'
})
export class PlataformasComponent {
platformList:Platforms[]=[]

constructor(private platformsService:PlatformsService){}

ngOnInit():void{
  this.getplatform();
}

getplatform() {
  this.platformsService.getplatform().subscribe({
    next: (result) => {
      this.platformList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
