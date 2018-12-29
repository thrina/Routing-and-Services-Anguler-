import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ FormsModule } from '@angular/forms'
import { HomeComponent } from './home/home.component'
// import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeCountComponent} from './employee/employeeCount.component';
import { EmployeeService } from './employee/employee.service';
import { PageNotFound } from './others/pageNotFound.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeCountComponent,HomeComponent,PageNotFound],
  imports: [BrowserModule, AppRoutingModule, FormsModule,NgbModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
