import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './web/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagesfoundComponent } from './error/nopagesfound/nopagesfound.component';



const routes: Routes = [
  { path:'dashboard', component:DashboardComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  {path: '**',component:NopagesfoundComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }