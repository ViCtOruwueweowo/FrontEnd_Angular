import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-form-registro-app',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './form-registro-app.component.html',
  styleUrl: './form-registro-app.component.css',
  animations:[
    trigger('fadeIn',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms',style({opacity:2})),
      ]),
    ])
  ]
})

export class FormRegistroAppComponent {

}
