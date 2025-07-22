import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CursosService } from '../../shared/services/cursos.service';
import { Curso } from '../../shared/models/curso.model';

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
  cursos: Curso[] = [];
  columnas: string[] = ['id', 'nombre', 'descripcion', 'cupo'];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
  }
}
