function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
//-----------------
console.log("-----------------------------------");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
console.log("-----------------------------------");
function calculate_discount(price, rate) {
    if (rate === void 0) { rate = 0.80; }
    var discount = price * rate;
    console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
console.log("-----------------------------------");
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
console.log("-----------------------------------");
var myFunction = new Function("a", "b", "return a * b");
var x = myFunction(4, 3);
console.log(x);
console.log("-----------------------------------");
function disp(x, y) {
    console.log(x);
    console.log(y);
}
disp("abc");
disp(1, "xyz");
console.log("-----------------------------------");
//Function Type
var a1;
a1 = function () {
    console.log("It works");
};
console.log("-----------------------------------");
//named function with number as return type
function add(x, y) {
    console.log(x + y);
    return x + y;
}
add(10, 20);
