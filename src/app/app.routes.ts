import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'FormRegistroApp', loadComponent:()=>import('../app/form-registro-app/form-registro-app.component').then(c=>c.FormRegistroAppComponent)},
    {path:'FormLoginApp', loadComponent:()=>import('../app/form-login-app/form-login-app.component').then(c=>c.FormLoginAppComponent)}
];
