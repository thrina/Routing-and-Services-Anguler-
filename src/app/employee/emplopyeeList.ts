export interface IEmployee{
    code:string;
    name:string;
    gender:string;
    annualsaklary:number;
    dateofbirth:string;
     
}
class Employee implements IEmployee{
    constructor(public code:string,public name:string,public gender:string, public annualsaklary,public dateofbirth:string){

    }
   
}