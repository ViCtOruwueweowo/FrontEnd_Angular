import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { HttpResponse, withInterceptors } from '@angular/common/http';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Subscription, interval, takeWhile } from 'rxjs';
import { authInterceptor } from './core/interceptor/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    //provideHttpClient(),
    provideHttpClient(withInterceptors([ authInterceptor ])),
    HttpClient,
    provideAnimations(), 
    Router, 
  ]
};
