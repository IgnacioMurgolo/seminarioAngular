import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccesoriosListComponent } from './accesorios-list/accesorios-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccesoriosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Moto Accesorios';
}
