import { Component, Input } from '@angular/core';
import { Libro } from '../../libros.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-buttons',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card-buttons.component.html',
  styleUrl: './card-buttons.component.css'
})
export class CardButtonsComponent{
  @Input() libro: Libro | null = null;
  constructor() { }

}
