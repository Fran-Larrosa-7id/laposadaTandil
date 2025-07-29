import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
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

  menuOpen = false;
  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



}
