import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
Injectable({
  providedIn: 'root'
})

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('mi_token'); // Obtiene el token del localStorage

  console.log('Token obtenido del localStorage:', token); // Imprime el token
  if (token) {
    console.log('Paso por true'); 
    // Si el token existe, permite la navegación
    return true;
  } else {
    console.log('Paso por false'); 

    // Si no hay token, redirige al usuario a la página de inicio de sesión (o cualquier otra página que desees)
    // Asegúrate de tener una instancia de Router disponible para usarla aquí
    this.router.navigate(['/']);
    return false;
  }
};



// servicio e interface aqui dentro importados

