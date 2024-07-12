import { Injectable } from '@angular/core';
import { Accesorio } from './accesorios-list/Accesorio';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosCartService {

  private _listaCompras: Accesorio[] = [];
  listaCompras: BehaviorSubject <Accesorio[]>= new BehaviorSubject(this._listaCompras);

  constructor() { }

  agregarAlCarrito(accesorio: Accesorio) {
    let item: Accesorio | null = this._listaCompras.find((v1) => v1.descripcion == accesorio.descripcion) || null;
    if (!item) {
      this._listaCompras.push({ ...accesorio });
    } else {
      item.cantidad += accesorio.cantidad;
    }
    // console.log(this.listaCompras);
    this.listaCompras.next(this._listaCompras);
  }

}
