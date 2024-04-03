import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Pasando por el interceptor'); // Esta línea se imprimirá cada vez que una solicitud pase por el interceptor

    const token = localStorage.getItem('token'); 

    // Si tienes un token válido, agrégalo al encabezado
    if (token) {
      console.log('Paso por true en interceptor'); 
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authRequest);
    } else {
      console.log('Paso por false en interceptor'); 
      // Si no hay token, simplemente continúa con la solicitud original
      return next.handle(request);
    }
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

// aqui adentro el guard importados