let alphas:string[]; 
alphas = ["1","2","3","4"] 
console.log(alphas[0]); 
console.log(alphas[1]);

let a1:Number[] = [10,20,30,40];
console.log(a1[0]); 
console.log(a1[1]);


let a2:any[] = [10,"2",30,"40"];
console.log(a2[0]); 
console.log(a2[1]);



let arr_names:number[] = new Array(4); 

for(let i = 0;i<arr_names.length;i++) { 
   arr_names[i] = i * 2 ;
   console.log(arr_names[i]); 
}

let names:string[] = new Array("Mary","Tom","Jack","Jill") 

for(let i = 0;i<names.length;i++) { 
   console.log(names[i]) 
}

function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 let passed = [112, 15, 18, 130, 44].every(isBigEnough); 
 console.log("Test Value : " + passed );

 let passed1 = [112, 5, 18, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed1 );
 


 let arr = new Array("First","Second","Third"); 
          
 let str1 = arr.join(); 
console.log("str : " + str1 );  
          
let str2 = arr.join(", "); 
console.log("str : " + str2 );  
          
let str3 = arr.join(" + "); 
console.log("str : " + str3 );
