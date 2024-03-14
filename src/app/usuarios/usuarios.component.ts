import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { Users } from '../core/interfaces/users';
import { IndexComponent } from '../index/index.component';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [IndexComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usersList: Users[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.usersService.getUser().subscribe({
      next: (result) => {
        this.usersList = result[0];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}