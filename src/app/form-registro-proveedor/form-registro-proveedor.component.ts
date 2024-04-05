import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Providers } from '../core/interfaces/providers';
import { ProvidersService } from '../core/service/providers.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-form-registro-proveedor',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, NgIf, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './form-registro-proveedor.component.html',
  styleUrl: './form-registro-proveedor.component.css'
})

export class FormRegistroProveedorComponent {

  formproviders = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    contacto: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
  })

  get nombre() {
    return this.formproviders.controls.nombre
  }
  get direccion() {
    return this.formproviders.controls.direccion
  }
  get contacto() {
    return this.formproviders.controls.contacto
  }


  public provider: Providers = {
    id: '',
    nombre: '',
    direccion: '',
    contacto: ''
  }

  loading: boolean = false;
  message: string = '';
  imageUrl: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private providersService: ProvidersService,
    private router: Router
  ) { }

  public createProvider() {
    this.loading = true;
    this.imageUrl = 'https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700';
    this.providersService.createProvider(this.provider).subscribe(
      (response) => {
        this.loading = false;
        this.router.navigate(['/Provider']);
      },
      (error) => {
        this.loading = false;
        if (error.status === 422) {
          this.router.navigate(['/FProvider']);
        }
      }
    )
  }


}