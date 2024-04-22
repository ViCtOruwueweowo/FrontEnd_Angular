import { animate, style, transition, trigger } from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Logins } from '../core/interfaces/logins';
import { LoginService } from '../core/service/login.service';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { LoginResponse } from '../core/interfaces/loginresponse';

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

  formusers = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    pass: ['', [Validators.required]],
  })

 


  get email() {
   return this.formusers.controls.email
  }
  get pass() {
    return this.formusers.controls.pass
  }



public login:Logins={
  email:'',
  password:'',
  code:'',
  isActive:'',
}


loading:boolean=false;
message:string='';
imageUrl: string = '';

constructor(
  private formBuilder:FormBuilder,
  private loginService:LoginService,
  private router:Router
){}

public logeo() {
  this.message = "asdasdsad";
  this.loading = true;
  this.imageUrl = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700';
  this.loginService.logeo(this.login).subscribe(
    (response: LoginResponse) => { 
      const token = response.token;
      localStorage.setItem('token', token);
      this.router.navigate(['/Code']);
    },
    (error) => {
      console.error('Error al iniciar sesiónes:', error);
      this.message = '¡Ups!, Error En Correo O Contraseña'; 
      this.loading = false;
      setTimeout(() => {
        location.reload(); 
      }, 2000); 
    }
  );
}
}
