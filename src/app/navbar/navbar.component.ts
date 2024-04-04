import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { LoginResponse } from '../core/interfaces/loginresponse';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
public login:Logins={
  email:'',
  password:'',
  code:'',
  isActive:'',
}

constructor(
  private loginService:LoginService,
  private router:Router
){}

public logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/']);
}



}
