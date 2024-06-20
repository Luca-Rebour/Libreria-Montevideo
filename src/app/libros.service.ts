import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';

interface Villano {
  name: string;
  url: string;
}

export interface Libro {
  id: number;
  Year: number;
  Title: string;
  Handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: string;
  villains: Villano[];

}

export interface LibroResponse {
  data: Libro[];
}

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  URL: string = 'https://stephen-king-api.onrender.com/api/books';
  libros: Libro[] = [];
  private _cargando = new BehaviorSubject<boolean>(true);
  public readonly cargando$ = this._cargando.asObservable();

  constructor(private http: HttpClient) { }

  getLibros(): Observable<LibroResponse> {
    this._cargando.next(true); // Actualizar el estado de cargando a true

    return this.http.get<LibroResponse>(this.URL).pipe(
      finalize(() => this._cargando.next(false)) // Actualizar el estado de cargando a false al finalizar
    );
  }
}