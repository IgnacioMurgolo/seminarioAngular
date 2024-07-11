import { Component } from '@angular/core';
import { Accesorio } from './Accesorio';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { AccesoriosCartService } from '../accesorios-cart.service';

@Component({
  selector: 'app-accesorios-list',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, InputIntegerComponent],
  templateUrl: './accesorios-list.component.html',
  styleUrl: './accesorios-list.component.scss'
})

export class AccesoriosListComponent {

  accesorios: Accesorio[] = [
    {
      imagen: "assets/img/guante-4stroke.jpeg",
      descripcion: "guante invierno",
      marca: "4Stroke",
      precio: 58000,
      stock: 6,
      oferta: false,
      cantidad: 0,
    },
    {
      imagen: "assets/img/guante-4stroke.jpeg",
      descripcion: "guante verano",
      marca: "ripcurl",
      precio: 120000,
      stock: 5,
      oferta: true,
      cantidad: 0,
    },
    {
      imagen: "assets/img/guante-4stroke.jpeg",
      descripcion: "guante cuero",
      marca: "royal enfield",
      precio: 85000,
      stock: 9,
      oferta: false,
      cantidad: 0,
    },
  ]

  constructor(private cart: AccesoriosCartService) {
  }

  agregarAlCarrito(accesorio: Accesorio): void {
    this.cart.agregarAlCarrito(accesorio);
    accesorio.stock -= accesorio.cantidad;
    accesorio.cantidad = 0;
  }

} 
