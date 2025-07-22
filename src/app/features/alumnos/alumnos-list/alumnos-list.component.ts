import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../../../shared/models/alumno.model';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NombreCompletoPipe } from '../../../shared/pipes/nombre-completo.pipe';
import { TituloGrandeDirective } from '../../../shared/directives/titulo-grande.directive';



@Component({
  selector: 'app-alumnos-list',
  standalone: true,
  imports: [MatTableModule, NgFor, AsyncPipe, MatIcon, RouterLink, NombreCompletoPipe, TituloGrandeDirective, TituloGrandeDirective],
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {
  columnas: string[] = ['id', 'nombreCompleto', 'email', 'curso', 'acciones'];
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {}



  ngOnInit(): void {
    this.alumnosService.alumnos$.subscribe(data => {
      this.alumnos = data;
    });
  }
  

  eliminar(id: number): void {
    
      this.alumnosService.eliminarAlumno(id);
    
  }
  
  

}
