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



  roles = [{
    id: 1,
    name: "Supervisor",
  },{
    id: 2,
    name: "Empleado",
  }];


  employeeName: string = '';
  employeeAge: number = 0;
  employeeAddress: string = '';
  employeeSalary: number = 0;
  employeeRol: string = "";


  constructor(public api: EmployeesService){}

  register(){

    const employee = {
      nombre: this.employeeName,
      edad: this.employeeAge,
      direccion: this.employeeAddress,
      salario: this.employeeSalary,
      rol: this.employeeRol
    }

    this.api.createEmployee(employee).subscribe((data) =>{
      console.log(data);
    })

  }


}
