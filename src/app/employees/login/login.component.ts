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

    const employee = {
      employeeNumber: this.employeeNumber,
      employeePassword :this.employeePassword
    }

    this.api.login(employee).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/dashboard/init']);

    })

  }

}
