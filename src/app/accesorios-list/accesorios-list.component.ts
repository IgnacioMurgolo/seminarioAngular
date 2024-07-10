import { Component } from '@angular/core';

@Component({
  selector: 'app-accesorios-list',
  standalone: true,
  imports: [],
  templateUrl: './accesorios-list.component.html',
  styleUrl: './accesorios-list.component.scss'
})
export class AccesoriosListComponent {
  accesorio = {
    "imagen": "assets/img/guante-4stroke.jpeg",
    "descripcion": "guante ripcurl",
    "talle": "M",
    "precio": 58000,
    "stock": 6,
  }
}
