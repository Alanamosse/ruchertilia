import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExploitationComponent } from './exploitation/exploitation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path :'home', component: HomeComponent},
  {path :'miels', component: HomeComponent},
  {path :'exploitation', component: ExploitationComponent},
  {path :'contact', component: ContactComponent},
  // Defaults
  {path :'', redirectTo: 'home', pathMatch: 'full'},
  {path :'**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
