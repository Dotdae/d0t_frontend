import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private userData: any = null;

  constructor() { }

  setUserData(data: any): void{
    this.userData = data;
  }

  getUserData(): any{
    return this.userData;
  }

  clearUserData(): void{
    this.userData = null;
  }

}
