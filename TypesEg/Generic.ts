class ItemList
{
    private itemArray: Array<any>;
    constructor() {
        this.itemArray = [];
    }
    Add(item:any) : void {
        this.itemArray.push(item);
    }
    GetAll(): Array<any> {
        return this.itemArray;
    }
}
let fruits = new ItemList();
fruits.Add("Apple");
fruits.Add("Mango");
fruits.Add("Orange");
let listOfFruits = fruits.GetAll();
for (let i = 0; i < listOfFruits.length; i++) {
 console.log(listOfFruits[i]);
}

let numbers = new ItemList();
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);
let listOfnumbers = numbers.GetAll();
for (let i = 0; i < listOfnumbers.length; i++) {
 console.log(listOfnumbers[i]);
}

let bools = new ItemList();
bools.Add(true);
bools.Add(false);
let listOfbools = bools.GetAll();
for (let i = 0; i < listOfbools.length; i++) {
 console.log(listOfbools[i]);
}
