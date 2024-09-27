import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');


  constructor(private http: HttpClient) {}

  login(employee: any): Observable<any> {
    return this.http.post("http://localhost:4000/api/login", employee, {'headers': this.headers});
  }

}
