import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeesService } from '../../core/services/employees.service';


@Component({
  selector: 'app-employee-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-signup.component.html',
  styleUrl: './employee-signup.component.css'
})
export class EmployeeSignupComponent {

  employeeName: string = '';
  employeeAge: number = 0;
  employeeAddress: string = '';
  employeeSalary: number = 0;

  constructor(public api: EmployeesService){}

  register(){

    const employee = {
      nombre: this.employeeName,
      edad: this.employeeAge,
      direccion: this.employeeAddress,
      salario: this.employeeSalary
    }

    this.api.createEmployee(employee).subscribe((data) =>{
      console.log(data);
    })

  }


}
