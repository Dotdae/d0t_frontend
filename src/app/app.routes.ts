import { Routes } from '@angular/router';
import { LoginComponent } from './employees/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { EmployeeSignupComponent } from './employees/employee-signup/employee-signup.component';

export const routes: Routes = [

  // Login route.

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children : [
      {
        path: 'employees',
        component: EmployeeSignupComponent
      },
    ]
  },

  // Main page.

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }

];
