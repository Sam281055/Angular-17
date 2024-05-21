import { Component } from '@angular/core';
import { ContenedorComponent } from '../../shared/contenedor1/contenedor.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContenedorComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  WebsiteSrc = '../../assets/Website.svg'

  txt = 'No importa el tamaño de tu negocio, con el sistema ISL totalmente adaptado al Paraguay de DevLabs tendrás una sistema completo y eficiente, que disminuye procesos, agiliza la toma de decisiones y genera resultados precisos.'
  parrafo2 = 'Deja atrás los re-trabajos, altos costos, fallas y pérdidas derivadas de sistemas deficientes. Inventiva te ofrece una plataforma completa para llevar todas las áreas de tu empresa a un nuevo nivel.'

  opciones=[
    {nombre:'Control de Usuarios', src:'../../assets/UserPerMinute.svg', texto:'Control en tiempo real de todos los usuarios'},
    {nombre:'Interfaz amigable', src:'../../assets/experienceDesign.svg', texto:'Adaptable para todos los dispositivos'},
    {nombre:'Estadistica de ventas', src:'../../assets/analysis.svg', texto:'Control de ventas mensuales'},
    {nombre:'Metas programables', src:'../../assets/CompletionProgress.svg', texto:'Sistema de metas personalizadas'},

  ]

}
