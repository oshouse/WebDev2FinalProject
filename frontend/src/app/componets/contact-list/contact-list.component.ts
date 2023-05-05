import { Component, OnDestroy, OnInit, ɵsetUnknownElementStrictMode } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Contact } from 'src/app/models/contact';

import { AddressBookService } from 'src/app/services/address-book.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy{
    constructor(private auth: AuthenticationService, private services: AddressBookService){}

    userId? : string = this.auth.getUserID()
    subscription!: Subscription
  
    contacts : Contact [] = []

      ngOnInit(): void {
        this.subscription = this.services.findContacts(this.userId).subscribe((contacts: Contact[])=>{
          this.contacts = contacts;
          });
      }
    
      ngOnDestroy() : void{
        this.subscription.unsubscribe()
      }
} 
