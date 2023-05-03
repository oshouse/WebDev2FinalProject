import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  constructor(private auth: AuthenticationService, private services: AddressBookService){}

  userId? : string = this.auth.getUserID()
  name : string = ""
  contacts : Contact [] = []
  searchName : string = ""
    
    search() {
      const data : any = {
        name : this.name, 
        userID : this.userId,
      }
      this.searchName = "Contacts for: " + this.name
      this.services.searchContact(data)
        .subscribe({
        next: (res) => {
          this.contacts = res
        },
        error: (e) => console.error(e)
      });
  
      this.name = "" 
    }
  }
