import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee.component';
import { PageNotFound } from './others/pageNotFound.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'employees' , component: EmployeeListComponent},
  {path: '' , redirectTo:'/home', pathMatch:'full'},
  {path: '**', component:PageNotFound}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
