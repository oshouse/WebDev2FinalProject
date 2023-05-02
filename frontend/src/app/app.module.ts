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
import { LoginComponent } from './componets/login/login.component';
import { AuthguardGuard } from './authguard.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
const appRoutes: Routes = [
  { path: 'search', component: SearchbarComponent, canActivate:[AuthguardGuard] },
  { path: 'add', component: AddContactComponent, canActivate:[AuthguardGuard]},
  { path: 'list', component: ContactListComponent, canActivate:[AuthguardGuard] },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactListComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} //debugging
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
