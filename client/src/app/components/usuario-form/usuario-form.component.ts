import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  usuario: Usuario = {
    IdUsuario: '',
    Nombre: '',
    Correo: '',
    FechaNac: '',
    Direccion: '',
    Telefono: '',
    Password: '',      // Inicialización para la contraseña
    UserType: 'normal' // Inicialización por defecto para tipo de usuario
  };  

  edit: boolean = false;

  constructor(private UsuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['idUsuario']) {
      this.UsuarioService.getUsuario(params['idUsuario'])
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewUser() {
    this.UsuarioService.saveUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/usuarios']);
        },
        err => console.error(err)
      )
  }

  updateUser() {
    if (this.usuario.IdUsuario) {
      this.UsuarioService.updateUsuario(this.usuario.IdUsuario, this.usuario)
        .subscribe(
          res => { 
            console.log(res);
            this.router.navigate(['/usuario']);
          },
          err => console.error(err)
        );
    } else {
      console.error('IdUsuario es undefined.');
    }
  }

}