import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { LoginResponse } from '../core/interfaces/loginresponse';
import { NgFor, NgIf } from '@angular/common';
import { Users } from '../core/interfaces/users';
import { UsersService } from '../core/service/users.service';
import { Navbar } from '../core/interfaces/navbar';
import { NavbarService } from '../core/service/navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf,NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {

  admin:boolean=false;

  public navbar:Navbar={
    id:0,
    email:'',
    isRoot:'',
    role:false,
  }

  constructor(
    private navbarService:NavbarService,
    private userService:UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getnav();
  }

  getnav(){
    this.navbarService.getnav().subscribe({
      next:(result)=>{
        this.navbar=result.data;
        this.admin = this.navbar.role;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    // Add your cleanup logic here
  }

}