let person={
    name:"sravanthi",
    branch:"cse"
};
console.log(person.name);
console.log(person.branch);
console.log("--------------------------");
let person1={
    name:"sravanthi",
    branch:"cse",
    sayHello:function() {  }  //Type template 
};
person1.sayHello = function() {  
    console.log("hello "+person1.name)
 }  
 person1.sayHello();
 
 console.log("--------------------------");
 let invokeperson = function(obj:{ firstname:string, lastname :string}) { 
    console.log("first name :"+obj.firstname) 
    console.log("last name :"+obj.lastname) 
 } 
 invokeperson({firstname:"Sachin",lastname:"Tendulkar"});
 console.log("--------------------------");
let a111:Object={name:"Krishna",class:"FullStack",age:30};
console.log(a111);