import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css'],
})
export class UsuarioListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(
        res => {
          this.usuarios = res;
        },
        err => console.error(err)
      );
  }

  deleteUsuario(idUsuario: string) {
    this.usuarioService.deleteUsuario(idUsuario)
      .subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.error(err)
      );
  }

  updateUsuario(usuario: Usuario) {
    if (usuario.IdUsuario) {
      this.usuarioService.updateUsuario(usuario.IdUsuario, usuario)
        .subscribe(
          res => {
            console.log(res);
            this.getUsuarios();
          },
          err => console.error(err)
        );
    } else {
      console.error('IdUsuario es undefined.');
    }
  }

  saveUsuario(nuevoUsuario: Usuario) {
    this.usuarioService.saveUsuario(nuevoUsuario)
      .subscribe(
        res => {
          console.log(res);
          this.getUsuarios();
        },
        err => console.error(err)
      );
  }
}