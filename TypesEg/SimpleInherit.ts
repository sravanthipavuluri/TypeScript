class Person { //Parent Class
    private firstName: string;
    private lastName: string;
    constructor(_firstName: string, _lastName: string) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    protected fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
    
class Employee extends Person { //Child Class
    id: number;
    constructor(_id: number, _firstName: string, _lastName: string) {
    //calling parent class constructor
        super(_firstName, _lastName);
        this.id = _id;
    }
    showDetails(): void {
    //calling parent class method
        console.log(this.id + " : " + this.fullName());
    }
}
    
   let e1 = new Employee(1, "Shailendra", "Chauhan");
   e1.showDetails(); 