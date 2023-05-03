import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  constructor(private http: HttpClient) { }

  findContacts(userId? : string): Observable<any> {
    if(userId){
      return this.http.get('http://localhost:8080/api/findContact/' + userId)
    }else{
      return new Observable<any>
    }
  }

  addContact(data : Contact): Observable<Contact> {
      return this.http.post('http://localhost:8080/api/contact', data)
  }

  searchContact(data : any): Observable<any> {
    return this.http.post('http://localhost:8080/api/searchContact', data)
  }

}
