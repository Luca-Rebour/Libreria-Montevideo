import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

getLibros(): Observable<LibroResponse> {

  console.log(this.http.get<LibroResponse>(this.URL));
  
  return this.http.get<LibroResponse>(this.URL)
  
}
}