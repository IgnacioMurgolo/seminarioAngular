import { Routes } from '@angular/router';
import { AccesoriosTiendaComponent } from './accesorios-tienda/accesorios-tienda.component';
import { AccesoriosAboutComponent } from './accesorios-about/accesorios-about.component';

export const routes: Routes = [{ path: '', redirectTo: 'accesorios', pathMatch: 'full' },
{ path: 'accesorios', component: AccesoriosTiendaComponent },
{ path: 'about', component: AccesoriosAboutComponent },];

