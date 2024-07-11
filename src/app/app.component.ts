import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccesoriosTiendaComponent } from './accesorios-tienda/accesorios-tienda.component';
import { AccesoriosAboutComponent } from './accesorios-about/accesorios-about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccesoriosTiendaComponent, AccesoriosAboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Moto Accesorios';
}
