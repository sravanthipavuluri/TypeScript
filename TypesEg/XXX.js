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
var namespace_1 = require("./namespace");
var ExampleDetails;
(function (ExampleDetails) {
    var Marks = /** @class */ (function (_super) {
        __extends(Marks, _super);
        function Marks(id, name, fresher, subject, marks) {
            var _this = _super.call(this, id, name, fresher) || this;
            _this.subject = subject;
            _this.marks = marks;
            return _this;
        }
        Marks.prototype.DisplaySTudentMarks = function () {
            console.log(this.subject[0] + ":" + this.marks[0]);
            console.log(this.subject[1] + ":" + this.marks[1]);
            console.log(this.subject[2] + ":" + this.marks[2]);
        };
        return Marks;
    }(namespace_1.Example.Student));
    var marksObj = new Marks(1, "Sravanthi", true, ["Maths", "Science", "Social"], [50, 40, 30]);
    marksObj.DisplaySTudentMarks();
})(ExampleDetails || (ExampleDetails = {}));
