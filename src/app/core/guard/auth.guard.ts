import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EmployeesService } from '../services/employees.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private employeeService: EmployeesService, private router: Router) {}

  canActivate(): boolean {

    // Aquí verificamos si el usuario está autenticado

    if (this.employeeService.isAuthenticated()) {
      return true; // Permitir el acceso a la ruta si está autenticado
    }
    else {
      // Si no está autenticado, redirigir al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
