import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    username: "",
    password: "",
    firstName : "",
    lastName: "",
  }

  constructor(public authService: AuthenticationService, public router: Router) {
    if(authService.IsLoggedIn()){
      this.logout();
    }
  }

  login() {

    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl = '/list';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }
  
  logout() {
    this.authService.logout();
    this.user.username= ""
    this.user.password= ""
    this.user.firstName= ""
    this.user.lastName= ""
  }

  signup(){
    const data = {
      username : this.user.username,
      firstName: this.user.firstName,
      lastName : this.user.lastName,
      password : this.user.password
    }

    this.authService.signup(data)
      .subscribe({
        next: (res : any) => {
          console.log(res);  
          this.user.username= ""
          this.user.password= ""
          this.user.firstName= ""
          this.user.lastName= ""
          
          alert("Successful sign up! Please login to use the sight")        
        },
        error: (e: any) => {
          console.log(e)
          if(e.error.message.includes("E1100")){
            alert("Username has been taken. Please choose a different one")
          }else{
            alert(e.error.message)
          }
        }
      })
  }
}
