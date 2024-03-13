import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormRegistroAppComponent } from './form-registro-app/form-registro-app.component';
import { FormLoginAppComponent } from './form-login-app/form-login-app.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink ,IndexComponent,FormRegistroAppComponent, FormLoginAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontEnd_Angular';
}
