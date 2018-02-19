var alphas;
alphas = ["1", "2", "3", "4"];
console.log(alphas[0]);
console.log(alphas[1]);
var a1 = [10, 20, 30, 40];
console.log(a1[0]);
console.log(a1[1]);
var a2 = [10, "2", 30, "40"];
console.log(a2[0]);
console.log(a2[1]);
var arr_names = new Array(4);
for (var i = 0; i < arr_names.length; i++) {
    arr_names[i] = i * 2;
    console.log(arr_names[i]);
}
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
function isBigEnough(element, index, array) {
    return (element >= 10);
}
var passed = [112, 15, 18, 130, 44].every(isBigEnough);
console.log("Test Value : " + passed);
var passed1 = [112, 5, 18, 130, 44].filter(isBigEnough);
console.log("Test Value : " + passed1);
var arr = new Array("First", "Second", "Third");
var str1 = arr.join();
console.log("str : " + str1);
var str2 = arr.join(", ");
console.log("str : " + str2);
var str3 = arr.join(" + ");
console.log("str : " + str3);
