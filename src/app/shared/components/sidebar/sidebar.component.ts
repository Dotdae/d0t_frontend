import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeesService } from '../../../core/services/employees.service';
import { EmployeeDataService } from '../../../core/services/employee-data.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent
{
  userData: any;
  isLogged: boolean = false;
  username: string = '';
  userRol: string = '';

  constructor(
    private employeeService: EmployeesService,
    private employeeData: EmployeeDataService
  ) {}

  ngOnInit(){

    // Check if is logged.

    this.isLogged = this.employeeService.isAuthenticated();

    // Extract saved data and asign in each variable to show it in the view.

    this.userData = this.employeeData.getUserData();
    this.username = this.userData.nombre;
    this.userRol = this.userData.rol
  }

  logout(){

    this.employeeService.logout();

  }

}
