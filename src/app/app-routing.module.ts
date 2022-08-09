import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { TemolatesComponent } from './templates/temolates.component';

const routes: Routes = [
  {path:'', redirectTo:'HomeComponent' , pathMatch:'full' },
  {path:`home`,component:HomeComponent},
  {path:`templates`,component:TemolatesComponent},
  {path:`contacts`,component:ContactsComponent},
  {path:`signup`,component:SignupComponent},
  {path:`**`,component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
