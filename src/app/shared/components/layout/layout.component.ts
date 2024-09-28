import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { EmployeeSignupComponent } from "../../../employees/employee-signup/employee-signup.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, EmployeeSignupComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
