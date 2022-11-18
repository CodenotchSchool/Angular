import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro [];
  constructor() { 
    this.libros = [
      new Libro("El señor de los anillos", "Tapa dura", "John Ronald Reuel Tolkien", 50,"https://m.media-amazon.com/images/I/51rETBglWcL.jpg"),
      new Libro("La espada del destino", "Tapa dura", "Andrzej Sapkowski", 15,"https://imagessl3.casadellibro.com/a/l/t5/33/9788498890433.jpg"),
      new Libro("Es fácil dejar de fumar, si sabes cómo", "Tapa blanda","Allen Carr",12.25,"https://m.media-amazon.com/images/I/41+QRYdFunS.jpg"),
      new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg"),
      new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg")
    ]
  }

  ngOnInit(): void {
  }

  public pushLibro(titulo:string, tipo: 'Tapa dura' | 'Tapa blanda', autor:string, precio: number, foto:string){
    this.libros.push(new Libro(titulo,tipo,autor,precio,foto));
  }
}
