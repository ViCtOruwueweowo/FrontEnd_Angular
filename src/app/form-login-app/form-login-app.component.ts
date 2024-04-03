import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-form-login-app',
  standalone: true,
  imports: [UsuariosComponent,RouterLink, RouterModule, NgIf,FormsModule, ReactiveFormsModule],
  templateUrl: './form-login-app.component.html',
  styleUrl: './form-login-app.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms',style({opacity:2})),
      ]),
    ])
  ]
})
export class FormLoginAppComponent {

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

public logeo(){
  this.loginService.logeo(this.login).subscribe(
  (response)=>{
    this.router.navigate(['/Users']);
  }
  )
}
}
