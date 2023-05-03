import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddContactComponent } from './componets/add-contact/add-contact.component';
import { ContactListComponent } from './componets/contact-list/contact-list.component';
// import { FooterComponent } from './componets/footer/footer.component';
import { LoginComponent } from './componets/login/login.component';
import { SearchbarComponent } from './componets/searchbar/searchbar.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  { path: 'search', component: SearchbarComponent, canActivate:[AuthguardGuard] },
  { path: 'add', component: AddContactComponent, canActivate:[AuthguardGuard]},
  { path: 'list', component: ContactListComponent, canActivate:[AuthguardGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } 
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
