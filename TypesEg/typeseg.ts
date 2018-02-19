//-------General----------
console.log("---------General--------------");
let isDone:boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(isDone);
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
//-----Numbers---------
//let abc:number = "Hello";//Error
console.log("----------Numbers-------------");
let abc = 10;
console.log(typeof(abc));
//------------ Strings  ------------
console.log("-----------Strings------------");
let color: string = "blue";
console.log(color);
console.log(typeof(color));

let fullName: string = `Hello Bobb`;
console.log(fullName);
console.log(typeof(fullName));

let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

let sentenc: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentenc);
//-----Arrays-------
console.log("----------Arrays-------------");
//Type-1
let list: number[] = [1, 2, 3];
console.log("Length: "+list.length+"\n"+"--------");
for(let a:number=0;a<list.length;a++){
    console.log(list[a]);
}

//Type-2
let list1: Array<number> = [1, 2, 3];
console.log("Length: "+list1.length+"\n"+"--------");
for(let a:number=0;a<list1.length;a++){
    console.log(list1[a]);
}


//-----Tuple----------
console.log("---------Tuple--------------");
let x:[string,number];
x=["Hello",10];
//x=[10,"Hello"];//Error
console.log(x[0]+"----"+typeof(x[0]));
console.log(x[1]+"---"+typeof(x[1]));
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error,

//-------Enum----------------
console.log("---------Enum--------------");
enum colors{red,green,blue}
let c:colors = colors.blue;
console.log(c);

enum colorrep{red=1,green=2,blue=3}
let c1:colorrep = colorrep.green;
console.log(c1);

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[1];
console.log(colorName); 


//-------Any--------
console.log("---------Any--------------");
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
console.log(notSure);

let list2: any[] = [1, true, "free"];
list2[2] = 100;
console.log(list2[2]);


let x1 = 100;
console.log(x1+"----"+typeof(x1));
let x2 = "hello";
console.log(x2+"----"+typeof(x2));
let x3:number = 100;
console.log(x3+"----"+typeof(x3));
let x4:string = "Hello";
console.log(x4+"----"+typeof(x4));
let x5:any = 100;
console.log(x5+"----"+typeof(x5));
let x6:any = "hello";
console.log(x6+"----"+typeof(x6));

