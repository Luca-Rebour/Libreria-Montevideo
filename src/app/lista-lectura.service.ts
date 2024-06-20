import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaLecturaService {
  listaLectura: any = [];
  private listaLecturaActualizada = new Subject<void>();

  // Observable al que se pueden suscribir los componentes
  listaLecturaActualizada$ = this.listaLecturaActualizada.asObservable();

  constructor() {
    const listaLecturaAlmacenada = localStorage.getItem('lista-lectura');
    this.listaLectura = listaLecturaAlmacenada ? JSON.parse(listaLecturaAlmacenada) : [];
  }

  agregarLibro(libro: any) {
    if (!this.comprobarLibroEnLista(libro)) {
      this.listaLectura.push(libro);
      localStorage.setItem('lista-lectura', JSON.stringify(this.listaLectura));
      // Emitir evento de actualización
      this.listaLecturaActualizada.next();
    } else {
    }
  }

  comprobarLibroEnLista(libro: any) {
    return this.listaLectura.some((libroLista: any) => libroLista.id === libro.id);
  }

  obtenerListaLectura() {
    try {
      const listaLectura = localStorage.getItem('lista-lectura');
      return JSON.parse(listaLectura || '[]');
    } catch (error) {
      return [];
    }
  }

  deleteLibroLista(index: number) {
    this.listaLectura.splice(index, 1);
    localStorage.setItem('lista-lectura', JSON.stringify(this.listaLectura));
    // Emitir evento de actualización
    this.listaLecturaActualizada.next();
  }
    
}