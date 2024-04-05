import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { UsersService } from '../core/service/users.service';
import { Users } from '../core/interfaces/users';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators,  } from '@angular/forms';
import {  Route } from '@angular/router';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { FormLoginAppComponent } from '../form-login-app/form-login-app.component';

@Component({
  selector: 'app-form-registro-app',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink, NgIf, FormsModule, ReactiveFormsModule, UsuariosComponent, FormLoginAppComponent],
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

  formuser = this.formBuilder.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    pass: ['', [Validators.required, Validators.minLength(8)]],
  })

 

  get name() {
   return this.formuser.controls.name
  }
  get email() {
   return this.formuser.controls.email
  }
  get pass() {
    return this.formuser.controls.pass
  }

  public user: Users = {
    name: '',
    email: '',
    password: '',
    role_id:'',
  };

loading:boolean=false;
message:string='';
imageUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
  ) {}


  public createUser() {
    this.loading = true;
    this.imageUrl = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700';
    this.usersService.createUser(this.user).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate(['']);
      },
      (error) => {
        this.loading = false;
        if (error.status === 401) {
          this.router.navigate(['/']);
        }
      }
    );
  }
}
