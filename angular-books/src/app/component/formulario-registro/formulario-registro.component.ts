import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RespuestaUsuario } from 'src/app/models/respuesta-usuario';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';


@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {

  public usuario: Usuario;
  constructor(public usuarioService:UsuarioService) {
    this.usuario = new Usuario(0,"","","","","")
   }

  ngOnInit(): void {
  }

  registro(){

    if(this.usuario.password == this.usuario.password2){
      this.usuarioService
      .register(this.usuario)
      .subscribe((data:RespuestaUsuario)=>{
        console.log(data);
      })
    }
    else{
      console.log("Las contraseñas no coinciden");
      
    }
  }
}
