import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports para Libros
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookFormComponent } from './components/book-form/book-form.component';

// Imports para Prestamos
import { PrestamosListComponent } from './components/prestamos-list/prestamos-list.component';
import { PrestamoFormComponent } from './components/prestamo-form/prestamo-form.component';
import { PrestamoEditComponent } from './prestamo-edit/prestamo-edit.component';

// Imports para Multas
import { MultaListComponent } from './components/multa-list/multa-list.component'; 
import { MultaFormComponent } from './components/multa-form/multa-form.component'; 

// Imports para Usuarios
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component'; 
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component'; 

const routes: Routes = [
  {
    path: '',
    redirectTo: '/usuarios', 
    pathMatch: 'full'
  },
  
  // Rutas para Usuarios
  {
    path: 'usuarios', 
    component: UsuarioListComponent 
  },
  {
    path: 'usuarios/add', 
    component: UsuarioFormComponent 
  },
  {
    path: 'usuarios/edit/:idUsuario',
    component: UsuarioFormComponent 
  },

  // Rutas para Libros
  {
    path: 'books',
    component: BooksListComponent
  },
  {
    path: 'books/add',
    component: BookFormComponent
  },
  {
    path: 'books/edit/:id',
    component: BookFormComponent
  },

  // Rutas para Prestamos
  {
    path: 'prestamos',
    component: PrestamosListComponent
  },
  {
    path: 'prestamos/add',
    component: PrestamoFormComponent
  },
  {
    path: 'prestamos/edit/:id',
    component: PrestamoEditComponent
  },

  // Rutas para Multas
  {
    path: 'multas',
    component: MultaListComponent
  },
  {
    path: 'multas/add',
    component: MultaFormComponent
  },
  {
    path: 'multas/edit/:idMulta',
    component: MultaFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


