import { Injectable } from '@angular/core';
import { Inscripcion } from '../../shared/models/inscripcion.model';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private inscripciones: Inscripcion[] = [
    { id: 1, alumnoId: 1, cursoId: 1, fecha: '2025-07-01' },
    { id: 2, alumnoId: 2, cursoId: 2, fecha: '2025-07-02' }
  ];

  obtenerInscripciones(): Inscripcion[] {
    return this.inscripciones;
  }

  agregarInscripcion(inscripcion: Inscripcion): void {
    this.inscripciones.push(inscripcion);
  }

  eliminarInscripcion(id: number): void {
    this.inscripciones = this.inscripciones.filter(i => i.id !== id);
  }

  obtenerPorAlumno(alumnoId: number): Inscripcion[] {
    return this.inscripciones.filter(i => i.alumnoId === alumnoId);
  }
}
