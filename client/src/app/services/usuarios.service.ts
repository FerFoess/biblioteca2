import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  API_URI = 'http://localhost:3000/api'; 

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URI}/usuarios`); 
  }

  getUsuario(idUsuario: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URI}/usuarios/${idUsuario}`); 
  }

  deleteUsuario(idUsuario: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/usuarios/${idUsuario}`); 
  }

  saveUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URI}/usuarios`, usuario); 
  }

  updateUsuario(idUsuario: string, updatedUsuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.API_URI}/usuarios/${idUsuario}`, updatedUsuario); 
  }
}

