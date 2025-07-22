import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SessionService } from '../../shared/services/session.service';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
  rol: 'admin' | 'usuario' = 'usuario';

  constructor(private session: SessionService) {}

  ngOnInit() {
    this.rol = this.session.getRol();
  }

  cambiarRol() {
    this.session.setRol(this.rol);
    window.location.reload();
  }
}
