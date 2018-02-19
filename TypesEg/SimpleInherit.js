var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(_firstName, _lastName) {
        this.firstName = _firstName;
        this.lastName = _lastName;
    }
    Person.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(_id, _firstName, _lastName) {
        var _this = 
        //calling parent class constructor
        _super.call(this, _firstName, _lastName) || this;
        _this.id = _id;
        return _this;
    }
    Employee.prototype.showDetails = function () {
        //calling parent class method
        console.log(this.id + " : " + this.fullName());
    };
    return Employee;
}(Person));
var e1 = new Employee(1, "Shailendra", "Chauhan");
e1.showDetails();
