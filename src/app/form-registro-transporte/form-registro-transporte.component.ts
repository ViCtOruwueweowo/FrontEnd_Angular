import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Shippers } from '../core/interfaces/shippers';
import { ShippersService } from '../core/service/shippers.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-form-registro-transporte',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, NgIf, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './form-registro-transporte.component.html',
  styleUrl: './form-registro-transporte.component.css'
})
export class FormRegistroTransporteComponent {

  formshippers = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    email_contacto: ['', [Validators.required, Validators.email]],
  })

  get name() {
    return this.formshippers.controls.name
  }
  get direccion() {
    return this.formshippers.controls.direccion
  }
  get email_contacto() {
    return this.formshippers.controls.email_contacto
  }

  public shippers: Shippers = {
    id: '',
    name: '',
    direccion: '',
    email_contacto: '',
  }

  loading: boolean = false;
  message: string = '';
  imageUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private shippersService: ShippersService,
    private router: Router
  ) { }

  public createShippers() {
    this.loading = true;
    this.imageUrl = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700';
    this.shippersService.createShippers(this.shippers).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate(['/Transport']);
      },
      (error) => {
        console.error('Error al iniciar sesiónes:', error);
        this.message = '¡Ups!, Parece Que Algo Salio Mal'; 
        this.loading = false;
        setTimeout(() => {
          location.reload(); 
        }, 2000); 
      }
    )
  }
}
