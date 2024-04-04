import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { LoginResponse } from '../core/interfaces/loginresponse';
import { DisabledInitialNavigationFeature } from '@angular/router';
import { disableDebugTools } from '@angular/platform-browser';

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

public logeo() {
  // Llama al servicio de inicio de sesión (loginService)
  this.loginService.logeo(this.login).subscribe(
    (response: LoginResponse) => { 
      // Extrae el token de la respuesta (por ejemplo, response.token)
      const token = response.token;

      // Almacena el token en localStorage
      localStorage.setItem('mi_token', token);

      // Redirige al usuario a la página de usuarios
      this.router.navigate(['/Users']);
    },
    (error) => {
      console.error('Error al iniciar sesión:', error);
    }
  );
}
}
