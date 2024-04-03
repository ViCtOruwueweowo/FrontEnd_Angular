import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Logins } from '../core/interfaces/logins';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../core/service/login.service';
@Component({
  selector: 'app-verificar',
  standalone: true,
  imports: [NavbarComponent, NgIf,FormsModule,ReactiveFormsModule],
  templateUrl: './verificar.component.html',
  styleUrl: './verificar.component.css'
})
export class VerificarComponent {
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

public sendEmail(){
  this.loginService.sendEmail(this.login).subscribe(
    (response)=>{
      
    }
  )
}

public validarCodigo(){
  this.loginService.validarCodigo(this.login).subscribe(
    (response)=>{
      
    }
  )
}
}
