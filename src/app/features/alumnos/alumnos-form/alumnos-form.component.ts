import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../../../shared/models/alumno.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent implements OnInit {
  form!: FormGroup;
  alumnoId?: number;

  constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      curso: ['', Validators.required]
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.alumnoId = +id;
      const alumno = this.alumnosService.obtenerAlumnos().find(a => a.id === this.alumnoId);
      if (alumno) {
        this.form.patchValue(alumno);
      }
    }
  }

  guardar(): void {
    if (this.form.valid) {
      const alumno: Alumno = {
        id: this.alumnoId ?? Date.now(), 
        ...this.form.value
      };

      if (this.alumnoId) {
        this.alumnosService.actualizarAlumno(alumno);
      } else {
        this.alumnosService.agregarAlumno(alumno);
      }

      this.router.navigate(['/alumnos']);
    }
  }
}
