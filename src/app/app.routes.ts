import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'FormRegistroApp', loadComponent:()=>import('../app/form-registro-app/form-registro-app.component').then(c=>c.FormRegistroAppComponent)},
    {path:'FormLoginApp', loadComponent:()=>import('../app/form-login-app/form-login-app.component').then(c=>c.FormLoginAppComponent)},
    {path:'Users', loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent)},
    {path:'Games', loadComponent:()=>import('../app/video-juegos/video-juegos.component').then(c=>c.VideoJuegosComponent)},

];
