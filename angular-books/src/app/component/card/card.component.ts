import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() libro:Libro;
  @Input() par:boolean;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public borrar(id_libro:number){
    this.deleteEvent.emit(id_libro);
  }
}
