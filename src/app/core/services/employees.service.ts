import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { EmployeeDataService } from './employee-data.service';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  });

  private apiURL = "http://localhost:4000/api";
  user: string = '';


  constructor(
    private http: HttpClient,
    private router: Router,
    private employeeData: EmployeeDataService
  ) {}

  login(employeeNumber: number, employeePassword: string): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, {employeeNumber, employeePassword}, {
      headers: this.headers,               // Include headers.
      withCredentials: true,              // With credentials is for include the cookies.
    }).pipe(
      tap((res: any) =>{
        this.employeeData.setUserData(res);

      })
    );
  }

  createEmployee(employee: any): Observable<any>{
    return this.http.post(`${this.apiURL}/employees`, employee, {'headers': this.headers});

  }

  getEmployee(employeeID: number): Observable<any>{
    return this.http.get(`${this.apiURL}/employees/${employeeID}`, {
      headers: this.headers,
      withCredentials: true,
    })
  }

  logout(): void{
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean{

    return true;

  }

}
