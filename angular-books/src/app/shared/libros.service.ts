import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libro[];
  constructor() { 
    this.libros = [      
      new Libro("El señor de los anillos", "Tapa dura", "John Ronald Reuel Tolkien", 50,"https://m.media-amazon.com/images/I/51rETBglWcL.jpg",1,1),
      new Libro("La espada del destino", "Tapa dura", "Andrzej Sapkowski", 15,"https://imagessl3.casadellibro.com/a/l/t5/33/9788498890433.jpg",2,1),
      new Libro("Es fácil dejar de fumar, si sabes cómo", "Tapa blanda","Allen Carr",12.25,"https://m.media-amazon.com/images/I/41+QRYdFunS.jpg",3,1),
      new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg",4,1),
      new Libro("Harry Potter y la piedra filosofal ", "Tapa blanda","J. K. Rowling",14.25,"https://m.media-amazon.com/images/I/51uxZ1EkT4L.jpg",5,1)
    ]
  }

  public getAll(): Libro []{
    return this.libros;
  }

  public getOne(id_libro: number): Libro{
    return this.libros.filter(libro => libro.id_libro == id_libro)[0];
  }

  public add(libro: Libro): void{
    this.libros.push(libro);
  }

  public edit(libro: Libro): boolean{
    let i = 0;

    while(i<this.libros.length && this.libros[i].id_libro != libro.id_libro){
      i++;
    }

    if(i<this.libros.length){
      this.libros[i] = libro;
      return true
    }else{
      return false;
    }
  }

  public delete(id_libro: number): boolean{
    let i = 0;

    while(i<this.libros.length && this.libros[i].id_libro != id_libro){
      i++;
    }

    if(i<this.libros.length){
      this.libros.splice(i,i+1);
      return true
    }else{
      return false;
    }
  }
}
