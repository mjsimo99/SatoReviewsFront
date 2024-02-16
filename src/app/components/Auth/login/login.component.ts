import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  credentials = { username: '', password: '' };
  @Output() loginSuccess = new EventEmitter<string>();
  showHome: boolean = false;
  isLoggin: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        console.log('Login response:', response);

        localStorage.setItem('token', response.token);
        this.authService.setUserRole(response.role);

        console.log('User role:', this.authService.getRole());

        this.authService.emitLoginSuccess(response.token);

        this.isLoggin = true;
        localStorage.setItem('isLogged', this.isLoggin.toString());

        console.log('Is Admin:', this.authService.isAdmin());
        console.log('Is User:', this.authService.isUser());

        this.router.navigate(['/reviews']);
      },
      error => {
        console.error('Login error:', error);

      }
    );
  }




  onLoginSuccess(token: string): void {
    this.isLoggin = true;
    localStorage.setItem('isLogged', this.isLoggin.toString());
    this.authService.emitLoginSuccess(token);
  }

}
