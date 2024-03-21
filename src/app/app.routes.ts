import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',loadComponent:()=>import('../app/form-login-app/form-login-app.component').then(c=>c.FormLoginAppComponent)},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent)},
    {path:'CreateUser',loadComponent:()=>import('../app/form-registro-app/form-registro-app.component').then(c=>c.FormRegistroAppComponent)},
    {path:'NavBar',loadComponent:()=>import('../app/navbar/navbar.component').then(c=>c.NavbarComponent)},
    {path:'Users',loadComponent:()=>import('../app/usuarios/usuarios.component').then(c=>c.UsuariosComponent)},
    {path:'Games',loadComponent:()=>import('../app/juegos/juegos.component').then(c=>c.JuegosComponent)},
    {path:'FGames',loadComponent:()=>import('../app/form-registro-juego/form-registro-juego.component').then(c=>c.FormRegistroJuegoComponent)},
    {path:'Platform',loadComponent:()=>import('../app/plataformas/plataformas.component').then(c=>c.PlataformasComponent)},
    {path:'Transport',loadComponent:()=>import('../app/transporte/transporte.component').then(c=>c.TransporteComponent)},
    {path:'FTransport',loadComponent:()=>import('../app/form-registro-transporte/form-registro-transporte.component').then(c=>c.FormRegistroTransporteComponent)},
    {path:'Provider',loadComponent:()=>import('../app/proveedores/proveedores.component').then(c=>c.ProveedoresComponent)},
    {path:'FProvider',loadComponent:()=>import('../app/form-registro-proveedor/form-registro-proveedor.component').then(c=>c.FormRegistroProveedorComponent)},
    {path:'Gender',loadComponent:()=>import('../app/generos/generos.component').then(c=>c.GenerosComponent)},
    {path:'Valorations',loadComponent:()=>import('../app/valoraciones/valoraciones.component').then(c=>c.ValoracionesComponent)},
    {path:'Orders',loadComponent:()=>import('../app/ordenes/ordenes.component').then(c=>c.OrdenesComponent)},
    {path:'Details',loadComponent:()=>import('../app/detalles/detalles.component').then(c=>c.DetallesComponent)},
    {path:'Log',loadComponent:()=>import('../app/log/log.component').then(c=>c.LogComponent)},

];
