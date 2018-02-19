var person = {
    name: "sravanthi",
    branch: "cse"
};
console.log(person.name);
console.log(person.branch);
console.log("--------------------------");
var person1 = {
    name: "sravanthi",
    branch: "cse",
    sayHello: function () { } //Type template 
};
person1.sayHello = function () {
    console.log("hello " + person1.name);
};
person1.sayHello();
console.log("--------------------------");
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Sachin", lastname: "Tendulkar" });
console.log("--------------------------");
var a111 = { name: "Krishna", "class": "FullStack", age: 30 };
console.log(a111);
