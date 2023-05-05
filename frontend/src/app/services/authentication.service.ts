import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient){}
  
  isLoggedIn = false;
  user$!: Observable<any>
  userID?: string = ""
  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(data: any): Observable<User> {
    this.user$ = this.http.post('http://localhost:8080/api/findUser', data)
    this.user$.subscribe({
      next: (res) => {
        if(res[0]){
          this.isLoggedIn = true
          this.userID = res[0]._id

        }else{
          alert("Incorrect username or password try again")
        }
      },
      error: (e) => console.error(e)
    })
    return this.user$
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  signup(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/user', data)
  }

  IsLoggedIn(){
    return this.isLoggedIn
  }

  getUserID(){
    return this.userID
  }
}
