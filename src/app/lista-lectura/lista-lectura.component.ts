import { Component, OnInit } from '@angular/core';
import { ListaLecturaService } from '../lista-lectura.service';
import { Subscription } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';



@Component({
  selector: 'app-lista-lectura',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './lista-lectura.component.html',
  styleUrl: './lista-lectura.component.css'
})
export class ListaLecturaComponent implements OnInit{
  private actualizacionSub?: Subscription;
  lista: any = [];
  constructor(private listaLectura : ListaLecturaService) { 
    this.lista = this.listaLectura.obtenerListaLectura();
    
   }

   ngOnInit() {
    this.actualizacionSub = this.listaLectura.listaLecturaActualizada$.subscribe(() => {
      // Llamar a obtenerListaLectura cada vez que se actualice la lista
      this.lista = this.listaLectura.obtenerListaLectura();
      
    });
  }

  deleteLibroLista(index: number){
    console.log(index);
    
    this.listaLectura.deleteLibroLista(index);
  }


}
