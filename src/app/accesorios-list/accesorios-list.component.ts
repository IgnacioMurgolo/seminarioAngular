import { Component } from '@angular/core';
import { Accesorio } from './Accesorio';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accesorios-list',
  standalone: true,
  imports: [CurrencyPipe, FormsModule],
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
      stock: 0,
      oferta: false,
      cantidad: 0,
    },
  ]

  masCantidad(accesorio: Accesorio): void {
    if (accesorio.cantidad < accesorio.stock && accesorio.stock != 0)
      accesorio.cantidad++;
  }

  menosCantidad(accesorio: Accesorio): void {
    if (accesorio.cantidad > 0)
      accesorio.cantidad--;
  }

  cambiarCantidad(accesorio: Accesorio): void {
    if (accesorio.cantidad > accesorio.stock) {
      alert("No hay suficientes en stock");
    }
    accesorio.cantidad = 0;
  }


} 
