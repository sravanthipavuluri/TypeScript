var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.displaydetails = function () {
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.displayFullName());
    };
    Employee.prototype.displayFullName = function () {
        return this.lastName + this.firstName;
    };
    return Employee;
}());
var emp = new Employee("krishna", "Sri");
emp.displaydetails();
