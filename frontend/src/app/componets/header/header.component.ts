import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'frontend';
  constructor(private authService: AuthenticationService){}

  getLoginStatus() {
    return (this.authService.isLoggedIn ? 'Logout' : 'Login');
  }
}
