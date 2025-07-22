import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private rol: 'admin' | 'usuario' = 'usuario';

  constructor() {
    const savedRol = localStorage.getItem('rol');
    if (savedRol === 'admin' || savedRol === 'usuario') {
      this.rol = savedRol;
    }
  }

  setRol(rol: 'admin' | 'usuario') {
    this.rol = rol;
    localStorage.setItem('rol', rol);
  }

  getRol(): 'admin' | 'usuario' {
    return this.rol;
  }

  isAdmin(): boolean {
    return this.rol === 'admin';
  }
}
