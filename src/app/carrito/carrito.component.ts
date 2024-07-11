import { Component } from '@angular/core';
import { AccesoriosCartService } from '../accesorios-cart.service';
import { Accesorio } from '../accesorios-list/Accesorio';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {

  listaCompras$!: Observable<Accesorio[]>;

  constructor(private cart: AccesoriosCartService) {
    this.listaCompras$ = cart.listaCompras.asObservable();
  }

}
