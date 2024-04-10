import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { LoginResponse } from '../core/interfaces/loginresponse';
import { NgFor, NgIf } from '@angular/common';
import { Users } from '../core/interfaces/users';
import { UsersService } from '../core/service/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf,NgFor],
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
    role:'',
    password: ''
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (result: any) => {
        this.user = result['0'];
      },
      error: (err) => {
        console.error(err);
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
