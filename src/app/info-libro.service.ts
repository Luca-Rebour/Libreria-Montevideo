import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoLibroService {
  private libroSource = new Subject<number>();
  libro$ = this.libroSource.asObservable();

  private cerrarSource = new Subject<boolean>();
  cerrar$ = this.libroSource.asObservable();

  enviarId(idLibro: number) {
    this.cerrarSource.next(false);
    this.libroSource.next(idLibro);
  }
  
cerrarInfo() {
  this.cerrarSource.next(true);
}
}
