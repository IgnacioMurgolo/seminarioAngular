import { Component, OnInit } from '@angular/core';
import { Accesorio } from './Accesorio';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from "../input-integer/input-integer.component";
import { AccesoriosCartService } from '../accesorios-cart.service';
import { AccesoriosDataService } from '../accesorios-data.service';


@Component({
  selector: 'app-accesorios-list',
  standalone: true,
  imports: [CurrencyPipe, FormsModule, InputIntegerComponent],
  templateUrl: './accesorios-list.component.html',
  styleUrl: './accesorios-list.component.scss',
  providers: [AccesoriosDataService]
})

export class AccesoriosListComponent {

  accesorios: Accesorio[] = [];

  constructor(
    private cart: AccesoriosCartService,
    private dataService: AccesoriosDataService) {
  }

  ngOnInit(): void {
    this.dataService.getAll()
      .subscribe(data => this.accesorios = data);
  };

  agregarAlCarrito(accesorio: Accesorio): void {
    if (accesorio.cantidad > 0) {
      this.cart.agregarAlCarrito(accesorio);
      accesorio.stock -= accesorio.cantidad;
      accesorio.cantidad = 0;
    }
  }

} 
