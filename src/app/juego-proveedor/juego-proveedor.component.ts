import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Gamesp } from '../core/interfaces/gamesp';
import { GamespService } from '../core/service/gamesp.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juego-proveedor',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './juego-proveedor.component.html',
  styleUrl: './juego-proveedor.component.css'
})
export class JuegoProveedorComponent {
gamespList:Gamesp[]=[];

constructor(private gamespService:GamespService)
{}

ngOnInit(): void {
  this.getGamesp();
}

getGamesp(){
  this.gamespService.getgamep().subscribe({
    next: (result) => {
      this.gamespList = result.data;
    },
    error: (err) => {
      console.log(err);
    }
  });
}
}
