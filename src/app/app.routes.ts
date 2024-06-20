import { Routes } from '@angular/router';
import { LibrosCardComponent } from './libros-card/libros-card.component';
import { ListaLecturaComponent } from './lista-lectura/lista-lectura.component';

export const routes: Routes = [
    {path: '', component: LibrosCardComponent},
    {path: 'lista-lectura', component: ListaLecturaComponent},
];
