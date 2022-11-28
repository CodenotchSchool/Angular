import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro [];
  constructor(public librosService:LibrosService) { 
   
    this.libros = this.librosService.getAll();
    console.log(this.librosService.getAll());
    
  }

  ngOnInit(): void {
  }

  public buscar(id:HTMLInputElement):void{

    let idLibro:number = id.valueAsNumber

    if(idLibro){
      this.libros = [];
      this.libros.push(this.librosService.getOne(idLibro))
    }
    else{
      this.libros=this.librosService.getAll();
    }
    
  }

  public borrar(id:number){
    
    if(this.librosService.delete(id)){
      let i = 0;

      while(i<this.libros.length && this.libros[i].id_libro != id){
        i++;
      }
  
      if(i<this.libros.length){
        this.libros.splice(i,i+1);
      }
    }

  }
}