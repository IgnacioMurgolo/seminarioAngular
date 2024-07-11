import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccesoriosListComponent } from '../accesorios-list/accesorios-list.component';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  imports: [FormsModule, AccesoriosListComponent],
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input()
  cantidad !: number;
  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  masCantidad(): void {
    if (this.cantidad < this.max && this.max != 0) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  menosCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }


  changeCantidad(): void {
    if (this.cantidad > this.max) {
      alert("No hay suficientes en stock");
    }
    this.cantidad = 0;
    this.cantidadChange.emit(this.cantidad);
  }
}
