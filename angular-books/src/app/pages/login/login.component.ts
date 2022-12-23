import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RespuestaUsuario } from 'src/app/models/respuesta-usuario';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario(0,"","","","","");
  constructor(public usuarioService: UsuarioService, public router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.usuario);
    
    this.usuarioService.login(this.usuario).subscribe((data:RespuestaUsuario)=>{
      if(data.codigo == 200){
        this.usuarioService.usuario = data.result[0];
        this.usuarioService.logueado = true;
        this.router.navigateByUrl('/libros')
      }
    })
  }

}
