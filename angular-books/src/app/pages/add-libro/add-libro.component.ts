import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css']
})
export class AddLibroComponent implements OnInit {

  constructor( public librosService: LibrosService) { 
    
  }

  ngOnInit(): void {
  }

  public pushLibro(titulo:string, tipo: 'Tapa dura' | 'Tapa blanda', autor:string, precio: number, foto:string):void{
    this.librosService.add(new Libro(titulo,tipo,autor,precio,foto))
  }
}
