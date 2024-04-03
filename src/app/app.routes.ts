import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('../app/form-login-app/form-login-app.component').then(c=>c.FormLoginAppComponent)},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent), canActivate: [authGuard]},
    {path:'CreateUser',loadComponent:()=>import('../app/form-registro-app/form-registro-app.component').then(c=>c.FormRegistroAppComponent)},
    {path:'NavBar',loadComponent:()=>import('../app/navbar/navbar.component').then(c=>c.NavbarComponent), canActivate: [authGuard]},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent), canActivate: [authGuard]},
    {path:'Games',loadComponent:()=>import('../app/juegos/juegos.component').then(c=>c.JuegosComponent), canActivate: [authGuard]},
    {path:'FGames',loadComponent:()=>import('../app/form-registro-juego/form-registro-juego.component').then(c=>c.FormRegistroJuegoComponent), canActivate: [authGuard]},
    {path:'Platform',loadComponent:()=>import('../app/plataformas/plataformas.component').then(c=>c.PlataformasComponent), canActivate: [authGuard]},
    {path:'Transport',loadComponent:()=>import('../app/transporte/transporte.component').then(c=>c.TransporteComponent), canActivate: [authGuard]},
    {path:'FTransport',loadComponent:()=>import('../app/form-registro-transporte/form-registro-transporte.component').then(c=>c.FormRegistroTransporteComponent), canActivate: [authGuard]},
    {path:'Provider',loadComponent:()=>import('../app/proveedores/proveedores.component').then(c=>c.ProveedoresComponent), canActivate: [authGuard]},
    {path:'FProvider',loadComponent:()=>import('../app/form-registro-proveedor/form-registro-proveedor.component').then(c=>c.FormRegistroProveedorComponent), canActivate: [authGuard]},
    {path:'Gender',loadComponent:()=>import('../app/generos/generos.component').then(c=>c.GenerosComponent), canActivate: [authGuard]},
    {path:'Valorations',loadComponent:()=>import('../app/valoraciones/valoraciones.component').then(c=>c.ValoracionesComponent), canActivate: [authGuard]},
    {path:'Orders',loadComponent:()=>import('../app/ordenes/ordenes.component').then(c=>c.OrdenesComponent), canActivate: [authGuard]},
    {path:'Details',loadComponent:()=>import('../app/detalles/detalles.component').then(c=>c.DetallesComponent), canActivate: [authGuard]},
    {path:'Log',loadComponent:()=>import('../app/log/log.component').then(c=>c.LogComponent), canActivate: [authGuard]},
    {path:'Auth',loadComponent:()=>import('../app/verificar/verificar.component').then(c=>c.VerificarComponent), canActivate: [authGuard]},
];
