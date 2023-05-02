import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient){}
  
  isLoggedIn = false;
  user = new User;
  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
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
}
