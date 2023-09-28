export interface Usuario {
    IdUsuario: string;
    Nombre: string;
    Correo: string;
    FechaNac: string;
    Direccion: string;
    Telefono: string;
    Password: string;       
    ConfirmPassword?: string; 
    UserType: string;       
  }