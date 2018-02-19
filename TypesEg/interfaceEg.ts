interface IHuman {
    firstName: string;
    lastName: string;
    displayFullName:()=>string;
}
class Employee implements IHuman {
    constructor(public firstName: string, public lastName: string) {

    }
    displaydetails(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.displayFullName());
    }
    displayFullName():string{
        return this.lastName+this.firstName;
    }
}
let emp:Employee=new Employee("krishna","Sri");
emp.displaydetails(); 

class Address extends Employee{
    
}
   