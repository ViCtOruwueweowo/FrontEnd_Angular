import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('../app/form-login-app/form-login-app.component').then(c=>c.FormLoginAppComponent)},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent), canActivate: [AuthGuard]},
    {path:'CreateUser',loadComponent:()=>import('../app/form-registro-app/form-registro-app.component').then(c=>c.FormRegistroAppComponent), canActivate: [AuthGuard]},
    {path:'NavBar',loadComponent:()=>import('../app/navbar/navbar.component').then(c=>c.NavbarComponent), canActivate: [AuthGuard]},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent), canActivate: [AuthGuard]},
    {path:'Games',loadComponent:()=>import('../app/juegos/juegos.component').then(c=>c.JuegosComponent), canActivate: [AuthGuard]},
    {path:'FGames',loadComponent:()=>import('../app/form-registro-juego/form-registro-juego.component').then(c=>c.FormRegistroJuegoComponent), canActivate: [AuthGuard]},
    {path:'Platform',loadComponent:()=>import('../app/plataformas/plataformas.component').then(c=>c.PlataformasComponent), canActivate: [AuthGuard]},
    {path:'Transport',loadComponent:()=>import('../app/transporte/transporte.component').then(c=>c.TransporteComponent), canActivate: [AuthGuard]},
    {path:'FTransport',loadComponent:()=>import('../app/form-registro-transporte/form-registro-transporte.component').then(c=>c.FormRegistroTransporteComponent), canActivate: [AuthGuard]},
    {path:'Provider',loadComponent:()=>import('../app/proveedores/proveedores.component').then(c=>c.ProveedoresComponent), canActivate: [AuthGuard]},
    {path:'FProvider',loadComponent:()=>import('../app/form-registro-proveedor/form-registro-proveedor.component').then(c=>c.FormRegistroProveedorComponent), canActivate: [AuthGuard]},
    {path:'Gender',loadComponent:()=>import('../app/generos/generos.component').then(c=>c.GenerosComponent), canActivate: [AuthGuard]},
    {path:'Valorations',loadComponent:()=>import('../app/valoraciones/valoraciones.component').then(c=>c.ValoracionesComponent), canActivate: [AuthGuard]},
    {path:'Orders',loadComponent:()=>import('../app/ordenes/ordenes.component').then(c=>c.OrdenesComponent), canActivate: [AuthGuard]},
    {path:'Details',loadComponent:()=>import('../app/detalles/detalles.component').then(c=>c.DetallesComponent), canActivate: [AuthGuard]},
    {path:'Log',loadComponent:()=>import('../app/log/log.component').then(c=>c.LogComponent), canActivate: [AuthGuard]},
    {path:'Auth',loadComponent:()=>import('../app/verificar/verificar.component').then(c=>c.VerificarComponent), canActivate: [AuthGuard]},
];
