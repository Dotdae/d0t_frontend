import { Routes } from '@angular/router';
import { LoginComponent } from './employees/login/login.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { EmployeeSignupComponent } from './employees/employee-signup/employee-signup.component';
import { EmployeeDashboardComponent } from './employees/employee-dashboard/employee-dashboard.component';
import { EmployeeMessagesComponent } from './employees/employee-messages/employee-messages.component';
import { EmployeeActivitiesComponent } from './employees/employee-activities/employee-activities.component';
import { EmployeeSectorsComponent } from './employees/employee-sectors/employee-sectors.component';
import { EmployeeWarehouseComponent } from './employees/employee-warehouse/employee-warehouse.component';
import { EmployeeReportsComponent } from './employees/employee-reports/employee-reports.component';
import { EmployeeConfigurationComponent } from './employees/employee-configuration/employee-configuration.component';

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
        path: 'init',
        component: EmployeeDashboardComponent
      },
      {
        path: 'employees',
        component: EmployeeSignupComponent
      },
      {
        path: 'messages',
        component: EmployeeMessagesComponent
      },
      {
        path: 'activities',
        component: EmployeeActivitiesComponent
      },
      {
        path: 'sectors',
        component: EmployeeSectorsComponent
      },
      {
        path: 'warehouse',
        component: EmployeeWarehouseComponent
      },
      {
        path: 'reports',
        component: EmployeeReportsComponent
      },
      {
        path: 'configuration',
        component: EmployeeConfigurationComponent
      }
    ]
  },

  // Main page.

  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  }

];
