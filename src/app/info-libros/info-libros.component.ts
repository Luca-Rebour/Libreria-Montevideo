import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';
import { Subscription } from 'rxjs';
import { InfoLibroService } from '../info-libro.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-info-libros',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './info-libros.component.html',
  styleUrl: './info-libros.component.css',
})
export class InfoLibrosComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  private subscription2: Subscription = new Subscription();
  constructor(
    private service: LibrosService,
    private idService: InfoLibroService
  ) {}

  libro?: any;

  ngOnInit() {
    this.subscription = this.idService.libro$.subscribe((id) => {
      this.service.getInfoLibro(id).subscribe((service) => {
        if (Array.isArray(service.data) && service.data.length > 0) {
          this.libro = service.data[0];
        } else {
          this.libro = service.data;
        }
        console.log(this.libro);
      });
    });

    this.subscription2 = this.idService.cerrar$.subscribe((cerrar) => {
      if (cerrar) {
        this.libro = null;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
