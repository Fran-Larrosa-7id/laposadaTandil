import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import AOS from 'aos';
import * as basicLightbox from 'basiclightbox';
import { Habitacion, HABITACIONES } from './habitaciones.data';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: {
    '(document:keydown)': 'swipeImgWithArrows($event)',
  }
})
export class App implements OnInit {
  protected title = 'posadaTandil';
  servicios = [
    { nombre: 'Estacionamiento', icon: 'assets/icons/estacionamiento.png' },
    { nombre: 'Caja Fuerte', icon: 'assets/icons/caja_fuerte.png' },
    { nombre: 'Smart TV', icon: 'assets/icons/smart.png' },
    { nombre: 'Wi-Fi', icon: 'assets/icons/wifi.png' },
    { nombre: 'Desayuno', icon: 'assets/icons/desayuno.png' },
    { nombre: 'Restaurant', icon: 'assets/icons/restaurant.png' },
    { nombre: 'Bar', icon: 'assets/icons/bar.png' },
    { nombre: 'Relax', icon: 'assets/icons/relax.png' },
    { nombre: 'Masajes', icon: 'assets/icons/masajes.png' },
    { nombre: 'Hidroterapia', icon: 'assets/icons/hidro.png' },
    { nombre: 'Gimnasio', icon: 'assets/icons/gym.png' },
    { nombre: 'Trainer', icon: 'assets/icons/trainer.png' },
    { nombre: 'Tenis', icon: 'assets/icons/tennis.png' },
    { nombre: 'Golf', icon: 'assets/icons/golf.png' },
    { nombre: 'Fútbol', icon: 'assets/icons/football.png' },
    { nombre: 'Piscina', icon: 'assets/icons/piscina.png' },
    { nombre: 'Juegos para peques', icon: 'assets/icons/chicos.png' },
    { nombre: 'Excursiones', icon: 'assets/icons/excur.png' },
    { nombre: 'Cabalgata', icon: 'assets/icons/cabalgata.png' },
    { nombre: 'Yoga', icon: 'assets/icons/yoga.png' },
  ];

  imagenes = [
    'assets/ellugar/lugar_01.jpg',
    'assets/ellugar/lugar_02.jpg',
    'assets/ellugar/lugar_03.jpg',
    'assets/ellugar/lugar_04.jpg',
    'assets/ellugar/lugar_05.jpg',
    'assets/ellugar/lugar_06.jpg',
    'assets/ellugar/lugar_07.jpg',
    'assets/rooms/rooms_01.jpg',
    'assets/rooms/rooms_02.jpg',
    'assets/rooms/rooms_03.jpg',
    'assets/rooms/rooms_04.jpg',
    'assets/rooms/rooms_05.jpg',
    'assets/rooms/rooms_06.jpg',
    'assets/eventos/eventos_01.jpg',
    'assets/eventos/eventos_02.jpg',
    'assets/eventos/eventos_03.jpg',
    'assets/eventos/eventos_04.jpg',
    'assets/eventos/eventos_05.jpg',
    'assets/eventos/eventos_06.jpg',
    'assets/eventos/eventos_07.jpg',
    'assets/eventos/eventos_08.jpg',
    'assets/relax/relax_01.jpg',
    'assets/relax/relax_02.jpg',
    'assets/relax/relax_03.jpg',
    'assets/relax/relax_04.jpg',
    'assets/relax/relax_05.jpg',
    'assets/deportes/deportes_01.jpg',
    'assets/deportes/deportes_02.jpg',
    'assets/deportes/deportes_03.jpg',
    'assets/deportes/deportes_04.jpg',
    'assets/deportes/deportes_05.jpg',
    'assets/deportes/deportes_06.jpg',
    'assets/deportes/deportes_07.jpg',
  ];
  menuOpen = false;
  imagenSeleccionada: string | null = null;
  indexActual: number = 0;
  habitaciones = HABITACIONES;
  habitacionSeleccionada = signal<Habitacion>(this.habitaciones[0]);



  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }


  swipeImgWithArrows(event: KeyboardEvent) {
    if (this.imagenSeleccionada) {
      if (event.key === 'ArrowRight') {
        this.siguiente(event);
      } else if (event.key === 'ArrowLeft') {
        this.anterior(event);
      }
    }
  }

  seleccionarHabitacion(h: Habitacion) {
    this.habitacionSeleccionada.set(h);
  }

  

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  abrirLightbox(imagen: string) {
    this.indexActual = this.imagenes.indexOf(imagen);
    this.imagenSeleccionada = imagen;
    setTimeout(() => (document.querySelector('[tabindex="0"]') as HTMLElement)?.focus(), 0); // para que funcione Escape
  }

  cerrarLightbox() {
    this.imagenSeleccionada = null;
  }

  siguiente(event: Event) {
    event.stopPropagation();
    this.indexActual = (this.indexActual + 1) % this.imagenes.length;
    this.imagenSeleccionada = this.imagenes[this.indexActual];
  }

  anterior(event: Event) {
    event.stopPropagation();
    this.indexActual = (this.indexActual - 1 + this.imagenes.length) % this.imagenes.length;
    this.imagenSeleccionada = this.imagenes[this.indexActual];
  }


}
