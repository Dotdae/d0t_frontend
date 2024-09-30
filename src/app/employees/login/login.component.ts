import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../../core/services/employees.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  employeeNumber: number = 0;
  employeePassword: string = '';

  constructor(
    public api: EmployeesService, private router: Router
  ){}

  login(){

    this.api.login(this.employeeNumber, this.employeePassword).subscribe({

      next: (data) => {
        console.log(data);
        localStorage.setItem('username', data.nombre)
        localStorage.setItem('rol', data.rol)
        this.router.navigate(['/dashboard/init']);
      },
      error: (err) =>{
        console.error(err);
      }

    })
  }

}
