import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
    @Input() texto='';
    @Input() titulo='';
    @Input() imagen='';
    @Input() btn1='';
    @Input() btn2='';
}
