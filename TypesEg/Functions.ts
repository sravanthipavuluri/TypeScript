function disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"John");
 disp_details(111,"mary","mary@xyz.com");

 //-----------------
console.log("-----------------------------------");
function addNumbers(...nums:number[]) {  
    let i;   
    let sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10);
 console.log("-----------------------------------");
 function calculate_discount(price:number,rate:number = 0.80) { 
    let discount = price * rate; 
    console.log("Discount Amount: ",discount); 
 } 
 calculate_discount(1000) 
 calculate_discount(1000,0.30)
 console.log("-----------------------------------");
 let res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2)) ;

 console.log("-----------------------------------");
 let myFunction = new Function("a", "b", "return a * b"); 
 let x = myFunction(4, 3); 
console.log(x);
console.log("-----------------------------------");
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");
console.log("-----------------------------------");
//Function Type
let a1:Function;
a1 = function ():void{
    console.log("It works");
}

console.log("-----------------------------------");
//named function with number as return type
function add(x: number, y: number): number {
    console.log(x+y);
    return x + y;
   }
   add(10,20); 