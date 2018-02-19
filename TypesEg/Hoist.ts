var x = "Gurukulsight";
function bar() {
 console.log(x); //Error: x is not defined
 let x; //x declaration is not hoisted
}
bar();
