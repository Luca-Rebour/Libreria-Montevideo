import { Component, Input } from '@angular/core';
import { Libro } from '../../libros.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaLecturaService } from '../../lista-lectura.service';

@Component({
  selector: 'app-card-buttons',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './card-buttons.component.html',
  styleUrl: './card-buttons.component.css'
})
export class CardButtonsComponent{
  @Input() libro: Libro | null = null;
  constructor(private listaLectura : ListaLecturaService) { }
  agragarListaLectura(libro: Libro){
    this.listaLectura.agregarLibro(libro);
  }

}
