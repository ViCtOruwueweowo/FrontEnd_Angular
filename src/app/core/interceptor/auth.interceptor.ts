import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtén el token almacenado (por ejemplo, desde localStorage)
    const token = localStorage.getItem('mi_token'); // Asegúrate de usar la clave correcta

    // Si tienes un token válido, agrégalo al encabezado
    if (token) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(authRequest);
    } else {
      // Si no hay token, simplemente continúa con la solicitud original
      return next.handle(request);
    }
  }
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

// aqui adentro el guard importados