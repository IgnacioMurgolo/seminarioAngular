import { Component } from '@angular/core';
import { AccesoriosListComponent } from '../accesorios-list/accesorios-list.component';
import { CarritoComponent } from '../carrito/carrito.component';
@Component({
  selector: 'app-accesorios-tienda',
  standalone: true,
  imports: [AccesoriosListComponent, CarritoComponent],
  templateUrl: './accesorios-tienda.component.html',
  styleUrl: './accesorios-tienda.component.scss'
})
export class AccesoriosTiendaComponent {

}
