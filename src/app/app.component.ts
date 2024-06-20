import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { LibrosService } from './libros.service';
import { ListaLecturaComponent } from './lista-lectura/lista-lectura.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, ListaLecturaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  private eventSource = new Subject<any>();
  event$ = this.eventSource.asObservable();

  title = 'Libreria-Montevideo';

  isLoading: boolean = true;

  constructor(private librosService: LibrosService) { 
    this.librosService.cargando$.subscribe((cargando: boolean) => {
      this.isLoading = cargando;
    });
  

  }

  emitEvent(data: any = null) {
    this.eventSource.next(data);
  }

}
