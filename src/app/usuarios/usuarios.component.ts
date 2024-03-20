import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/service/users.service';
import { Users } from '../core/interfaces/users';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usersList: Users[] = [];

  constructor(private usersService:UsersService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
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