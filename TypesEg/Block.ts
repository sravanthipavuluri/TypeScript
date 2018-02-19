//Block Scope Of Var
var marks:number[]=[1,2,3,4,5];
for(var i=0;i<marks.length;i++){
    console.log(i+" : "+marks[i]);
}
console.log(i);

//Block Scope Of Let
let marks1:number[]=[1,2,3,4,5];
for(let j=0;j<marks1.length;j++){
    console.log(j+" : "+marks1[j]);
}
//console.log(j); //Cannot find J since it is block scope.