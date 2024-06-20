import { Component, OnInit } from '@angular/core';
import { CardButtonsComponent } from './card-buttons/card-buttons.component';
import { LibrosComponent } from './libros/libros.component';
import { LibrosService } from '../libros.service';
import { NgFor, NgIf } from '@angular/common';
import { Libro } from '../libros.service';

@Component({
  selector: 'app-libros-card',
  standalone: true,
  imports: [CardButtonsComponent, LibrosComponent, NgFor, NgIf],
  templateUrl: './libros-card.component.html',
  styleUrl: './libros-card.component.css',
})
export class LibrosCardComponent implements OnInit {
  constructor(private librosService: LibrosService) {}
  public grupoActualIndex = 0;
  
  ngOnInit(): void {
    this.librosService.getLibros().subscribe((data) => {
      this.libros = data.data;
      this.librosAgrupados = this.agruparLibros(data.data);
    });
  }

  libros: Libro[] = [];

  librosAgrupados:any;

  agruparLibros(libros: Libro[]): Libro[][] {

    const grupos: Libro[][] = [];
    let grupoActual: Libro[] = [];

    libros.forEach((libro, index) => {
      grupoActual.push(libro);

      if (grupoActual.length === 4 || index === libros.length - 1) {
        grupos.push(grupoActual);
        grupoActual = [];
      }
    });
    return grupos;
  }
  siguienteGrupo(): void {
  if (this.grupoActualIndex < this.librosAgrupados.length - 1) {
    this.grupoActualIndex++;
  }
}

anteriorGrupo(): void {
  if (this.grupoActualIndex > 0) {
    this.grupoActualIndex--;
  }
}
}
