import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from '../../shared/models/alumno.model';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumnosIniciales: Alumno[] = [
    { id: 1, nombre: 'micaela', apellido: 'alarcon', email: 'jmicaela200@gmail.com', curso: 'moleculas' },
    { id: 2, nombre: 'patricio', apellido: 'murillo', email: 'patrick123@mail.com', curso: 'sistemas y atomos' },
    { id: 3, nombre: 'luis', apellido: 'martinez', email: 'luisElCapo@mail.com', curso: 'quimica aplicada' }
  ];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnosIniciales);
  alumnos$ = this.alumnosSubject.asObservable();

  obtenerAlumnos(): Alumno[] {
    return this.alumnosSubject.getValue();
  }

  agregarAlumno(alumno: Alumno): void {
    const actualizados = [...this.obtenerAlumnos(), alumno];
    this.alumnosSubject.next(actualizados);
  }

  eliminarAlumno(id: number): void {
    const actualizados = this.obtenerAlumnos().filter(a => a.id !== id);
    this.alumnosSubject.next(actualizados);
  }
  actualizarAlumno(actualizado: Alumno): void {
    const alumnos = this.obtenerAlumnos().map(a =>
      a.id === actualizado.id ? actualizado : a
    );
    this.alumnosSubject.next(alumnos);
  }
  
}
