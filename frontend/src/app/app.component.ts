import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private authService: AuthenticationService){}

  getLoginStatus() {
    return (this.authService.isLoggedIn ? 'Logout' : 'Login');
  }
}
