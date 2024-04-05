import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { LoginResponse } from '../core/interfaces/loginresponse';
import { NgIf } from '@angular/common';
import { Users } from '../core/interfaces/users';
import { UsersService } from '../core/service/users.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public login: Logins = {
    email: '',
    password: '',
    code: '',
    isActive: '',
  }

  public user: Users = {
    role_id: '',
    name: '',
    email: '',
    password: ''
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser().subscribe({
      next: (result) => {
        this.user = result.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  constructor(
    private userService:UsersService,
    private loginService: LoginService,
    private router: Router,
  ) { }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }



}
