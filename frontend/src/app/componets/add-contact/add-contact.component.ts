import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { AddressBookService } from 'src/app/services/address-book.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact : Contact = {}

  constructor(private auth: AuthenticationService, private services: AddressBookService){}

  userId? : string = this.auth.getUserID()
  newContact() {
    const data : Contact = {
      name : this.contact.name, 
      address : this.contact.address,
      phoneNumber : this.contact.phoneNumber,
      userID : this.userId,
    }
    console.log(data)

    this.services.addContact(data)
      .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });

    this.contact.name = ""
    this.contact.address = ""
    this.contact.phoneNumber = ""
  }
}
