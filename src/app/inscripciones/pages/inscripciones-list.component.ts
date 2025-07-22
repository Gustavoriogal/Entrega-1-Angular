import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { InscripcionesService } from '../../shared/services/inscripciones.service';
import { Inscripcion } from '../../shared/models/inscripcion.model';
import { AlumnosService } from '../../features/alumnos/alumnos.service';
import { CursosService } from '../../shared/services/cursos.service';
import { Alumno } from '../../shared/models/alumno.model';
import { Curso } from '../../shared/models/curso.model';

@Component({
  selector: 'app-inscripciones-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './inscripciones-list.component.html',
  styleUrls: ['./inscripciones-list.component.css']
})
export class InscripcionesListComponent implements OnInit {
  inscripciones: Inscripcion[] = [];
  columnas: string[] = ['id', 'alumno', 'curso', 'fecha'];

  constructor(
    private inscripcionesService: InscripcionesService,
    private alumnosService: AlumnosService,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.inscripciones = this.inscripcionesService.obtenerInscripciones();
  }

  obtenerNombreAlumno(id: number): string {
    const alumno = this.alumnosService.obtenerAlumnos().find(a => a.id === id);
    return alumno ? `${alumno.nombre} ${alumno.apellido}` : '';
  }

  obtenerNombreCurso(id: number): string {
    const curso = this.cursosService.obtenerCursos().find(c => c.id === id);
    return curso ? curso.nombre : '';
  }
}
