import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './componets/add-contact/add-contact.component';
import { ContactListComponent } from './componets/contact-list/contact-list.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { SearchbarComponent } from './componets/searchbar/searchbar.component';

const appRoutes: Routes = [
  { path: 'search', component: SearchbarComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'list', component: ContactListComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
