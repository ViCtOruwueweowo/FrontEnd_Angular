import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-login-app',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './form-login-app.component.html',
  styleUrl: './form-login-app.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms',style({opacity:2})),
      ]),
    ])
  ]
})
export class FormLoginAppComponent {

}
