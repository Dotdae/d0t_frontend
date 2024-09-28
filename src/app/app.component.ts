import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { LoginComponent } from "./employees/login/login.component";
import { EmployeeSignupComponent } from "./employees/employee-signup/employee-signup.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, SidebarComponent, LoginComponent, EmployeeSignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dot_frontend';
}
