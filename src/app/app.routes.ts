import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AlumnosListComponent } from './features/alumnos/alumnos-list/alumnos-list.component';
import { AlumnosFormComponent } from './features/alumnos/alumnos-form/alumnos-form.component';
import { CursosListComponent } from './cursos/pages/cursos-list.component';
import { InscripcionesListComponent } from './inscripciones/pages/inscripciones-list.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alumnos', component: AlumnosListComponent },
  { path: 'alumnos/nuevo', component: AlumnosFormComponent },
  { path: 'alumnos/editar/:id', component: AlumnosFormComponent },
  { path: 'cursos', component: CursosListComponent },
  { path: 'inscripciones', component: InscripcionesListComponent },
  { path: '**', redirectTo: '' }
];
