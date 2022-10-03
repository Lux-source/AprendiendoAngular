import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor() {
    this.titulo = "Componente peliculas";
    this.favorita = {title:"", year: 0, image:""};
    this.peliculas = [
      new Pelicula("Spiderman 3", 2019, "https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg"),
      new Pelicula("Spiderman 2", 2018, "https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg"),
      new Pelicula("Spiderman", 2015, "https://www.muycomputer.com/wp-content/uploads/2021/08/Spider-Man.jpg"),
    ];

    this.fecha = new Date(2020, 8, 12);

   }

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente iniciado!");
  }

  ngDoCheck(): void {
      console.log("DOCHECK LANZADO");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado";
  }

  ngOnDestroy(): void {
      console.log("EL COMPONENTE SE VA A ELIMINAR")
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }


}
