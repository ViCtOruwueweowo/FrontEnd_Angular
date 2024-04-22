import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Code } from '../core/interfaces/code';
import { CodeService } from '../core/service/code.service';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule, FormsModule, NgIf, NgFor],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css'
})
export class CodeComponent {
public code:Code={
  code:'',
}

constructor
( 
  private codeService:CodeService,
  private router: Router
){}
  
public validarcodigo(){
  this.codeService.sendEmail(this.code).subscribe(
    (response)=>{
      this.router.navigate(['/Provider'])
    }
  )
}
}
