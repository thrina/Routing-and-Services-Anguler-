import { Injectable} from '@angular/core';
import { IEmployee } from '../employee/emplopyeeList';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';

@Injectable()

export class EmployeeService{    
   getEmployee():IEmployee[] {
        return [  
        {code: 'emp101', name:'Tom', gender: 'Male', annualsaklary: 5500, dateofbirth:'6/25/1998' },
        {code: 'emp102', name:'Toy', gender: 'Female', annualsaklary: 5600, dateofbirth:'9/6/1998' },
        {code: 'emp103', name:'Toa', gender: 'Male', annualsaklary: 5700, dateofbirth:'12/18/1998' },
        {code: 'emp104', name:'Tog', gender: 'Female', annualsaklary: 5800, dateofbirth:'10/14/1998' },
        {code: 'emp105', name:'Tog', gender: 'Male', annualsaklary: 580, dateofbirth:'10/14/1990' },
        {code: 'emp106', name:'tom', gender: 'Male', annualsaklary: 580, dateofbirth:'10/14/1990' },
    ]
    }
   }
