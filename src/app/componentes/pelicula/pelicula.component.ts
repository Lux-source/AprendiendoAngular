import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula;
  @Output() MarcarFavorita = new EventEmitter();

  constructor() {
    this.pelicula = new Pelicula("", 0, "")
   }

  ngOnInit(): void {
  }

  seleccionar(event: Event, pelicula: Pelicula): void {
    console.log(event);
    console.log(pelicula);
    this.MarcarFavorita.emit({
      pelicula: pelicula

    });
  }

}
