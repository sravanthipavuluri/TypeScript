console.log("---------------------");
console.log("TypeScript Number Properties: ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
console.log("---------------------");
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
}
else {
    console.log("Value Accepted..");
}
console.log("---------------------");
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(123, "Smith");
employee.prototype.email = "smith@abc.com";
console.log("Employee 's Id: " + emp.id);
console.log("Employee's name: " + emp.name);
console.log("Employee's Email ID: " + emp.email);
console.log("---------------------");
var num3 = 177.234;
console.log("num3.toFixed() is " + num3.toFixed());
console.log("num3.toFixed(2) is " + num3.toFixed(2));
console.log("num3.toFixed(6) is " + num3.toFixed(6));
console.log(typeof (num3.toLocaleString()));
