import { Component, OnInit } from '@angular/core';
import {IEmployee } from '../employee/emplopyeeList'
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: '../employee/employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers:[EmployeeService]
})

export class EmployeeListComponent   {
employees: IEmployee[];
  selectEmployeeCountRadioButon: string= "All";
  // private empService:EmployeeService;
 

  
   constructor(private empService:EmployeeService){
    console.log("The data is  "+ this.employees);
    this.employees = this.empService.getEmployee();
    console.log("The employee Data is "+ this.employees);
    
// ngOnInit(){
//   this.employees = this.empService.getEmployee();
// }
  // getEmployees():void {
  //   this.employees=[
  //       {code: 'emp101', name:'Tom', gender: 'Male', annualsaklary: 5500, dateofbirth:'6/25/1998' },
  //       {code: 'emp102', name:'Toy', gender: 'Female', annualsaklary: 5600, dateofbirth:'9/6/1998' },
  //       {code: 'emp103', name:'Toa', gender: 'Male', annualsaklary: 5700, dateofbirth:'12/18/1998' },
  //       {code: 'emp104', name:'Tog', gender: 'Female', annualsaklary: 5800, dateofbirth:'10/14/1998' },
  //       {code: 'emp105', name:'Toz', gender: 'Male', annualsaklary: 5900, dateofbirth:'5/6/1998' },
  //       {code: 'emp106', name:'Toh', gender: 'Female', annualsaklary: 6000, dateofbirth:'8/9/1998' },
  //   ];

  }
    trackByEmpCode(index: number, employees: any ): string {
                  return employees.code;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void{
      
      this.selectEmployeeCountRadioButon= selectedRadioButtonValue;
    }

    getTotalEmployeesCount(): number {
              return this.employees.length;

    }
    getTotalMaleEmployeesCount(): number {
      return this.employees.filter(e => e.gender === "Male").length;

    }
    getTotalFemaleEmployeesCount(): number {
      return this.employees.filter(e => e.gender === "Female").length;
    }

  }





