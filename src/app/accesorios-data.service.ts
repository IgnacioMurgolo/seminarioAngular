import { Injectable } from '@angular/core';
import { Accesorio } from './accesorios-list/Accesorio';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://669063bec0a7969efd9bef21.mockapi.io/api/v1/accesorios';

@Injectable({
  providedIn: 'root'
})
export class AccesoriosDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Accesorio[]> {
    return this.http.get<Accesorio[]>(URL);
  }
}
