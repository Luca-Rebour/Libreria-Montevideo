import { Component, Input } from '@angular/core';
import { LibrosService } from '../../libros.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Libro } from '../../libros.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  @Input() libro: Libro | null = null;
  


  constructor(private librosService: LibrosService) { }

}
