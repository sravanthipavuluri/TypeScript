"use strict";
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
exports.__esModule = true;
var Example;
(function (Example) {
    var Student = /** @class */ (function () {
        function Student(id, name, fresher) {
            this.id = id;
            this.name = name;
            this.fresher = fresher;
        }
        Student.prototype.DisplayStudentInfo = function () {
            console.log("Id: " + this.id);
            console.log("Name : " + this.name);
            console.log("Fresher: " + this.fresher);
        };
        return Student;
    }());
    Example.Student = Student;
    var Address = /** @class */ (function (_super) {
        __extends(Address, _super);
        function Address(id, name, fresher, res, office, phone) {
            var _this = _super.call(this, id, name, fresher) || this;
            _this.res = res;
            _this.office = office;
            _this.phone = phone;
            return _this;
        }
        Address.prototype.DisplayStudentAddress = function () {
            this.DisplayStudentInfo();
            console.log("Residential Address: " + this.res);
            console.log("Office Address: " + this.office);
            console.log("Phone: " + this.phone);
        };
        return Address;
    }(Student));
    var addrObj = new Address(1, "Sravanthi", true, "Nehrunagar", "Vidyanagar", 124);
    addrObj.DisplayStudentAddress();
})(Example = exports.Example || (exports.Example = {}));
