import { Injectable } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private cursos: Curso[] = [
    { id: 1, nombre: 'Angular', descripcion: 'Curso completo de Angular', cupo: 20 },
    { id: 2, nombre: 'React', descripcion: 'Curso completo de React', cupo: 25 },
    { id: 3, nombre: 'Java', descripcion: 'Curso de backend con Java', cupo: 30 }
  ];

  obtenerCursos(): Curso[] {
    return this.cursos;
  }
}
