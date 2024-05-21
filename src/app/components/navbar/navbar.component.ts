import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrl: './navbar.component.css',
  template: `
    <nav class="flex flex-row bg-primary" >

      <div class="text-neutral text-xl font-sans font-semibold text-left flex flex-row px-7 py-3 hover:bg-secondary-dark hover:text-neutral-light" *ngFor="let items of opciones">
        <a [routerLink]="items.path" class="flex flex-row"><div *ngIf="items.src"><img src={{items.src}} class="h-7 w-8 mr-1"></div>{{items.nombre}}</a>
      </div>

    </nav>
  `
})
export class NavbarComponent {

  opciones = [
    { nombre: 'DevLabs', path: '/', src: "../../assets/Firebase.png" },
    { nombre: 'Productos', path: '/products' },
    { nombre: 'Servicios', path: '/services' },
    { nombre: 'Contacto', path: '/contact' },
    { nombre: 'Acerca de', path: '/about' },
  ]

  constructor(
    private route:Router
  ){}

  routerNavigate(path:string){
    return this.route.navigate([path]);
  }

}
