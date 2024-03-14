import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { IndexComponent } from '../index/index.component';
import { UsersService } from '../core/services/users.service';
import { Users } from '../core/interfaces/users';
import { NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  Route } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
@Component({
  selector: 'app-form-registro-app',
  standalone: true,
  imports: [RouterModule,RouterLink,IndexComponent, NgIf, FormsModule, ReactiveFormsModule, UsuariosComponent],
  templateUrl: './form-registro-app.component.html',
  styleUrl: './form-registro-app.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms',style({opacity:2})),
      ]),
    ])
  ]
})

export class FormRegistroAppComponent {
public user:Users={
  name:'',
  email:'',
  password:'',
}

public errorName:String| null=null;
public errorEmail:String| null=null;

constructor(
  private usersService:UsersService,
  private router:Router
){} 

public isFormComplete() {
  return this.user.name && this.user.email && this.user.password;
}

public createUser(){
  this.usersService.createUser(this.user).subscribe(
    (response) => {
         this.router.navigate(['/Users']);
    },
    (error) => {
    if(error.status==401){
      this.router.navigate(['/']);
    }
    if(
      error.error?.Errores.name !==undefined &&
      error.error?.Errores.name !==null
    ){
      this.errorName =error.error.Errores.name;
    }else{
      this.errorName=null;
    }

    }
  );
}
}
