import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [NavbarComponent,RouterModule,RouterLink],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

}
