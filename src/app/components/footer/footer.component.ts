import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    nosotros=[
      {txt:'Quienes somos', path:'/about'},
      {txt:'Contacto', path:'/contacts'},
      {txt:'Política de privacidad', path:'/'},
    ]
    constructor(
      private route:Router
    ){}
    servicios=[
      {txt:'Quienes Software para empresas', path:'/'},
      {txt:'Licencias', path:'/'},
      {txt:'Asistencia técnica', path:'/'},
    ]
}
