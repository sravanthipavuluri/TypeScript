console.log('hello typescript');
 
let a:any = "asd";

console.log(typeof(a));

let lists : Array<any> = [
    {
    id : 10,
    name : "hari",
    },
    {
        id : 20,
        name : "sadasd",
    },
    {
        id : 30,
        name : "sadsadas",
    }
]
lists.forEach(function(item:any){
    if(item.id == "20"){
        console.log(item.name)
    }
})


let isTrue : boolean = true;
console.log(isTrue);