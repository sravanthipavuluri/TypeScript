var ItemList = /** @class */ (function () {
    function ItemList() {
        this.itemArray = [];
    }
    ItemList.prototype.Add = function (item) {
        this.itemArray.push(item);
    };
    ItemList.prototype.GetAll = function () {
        return this.itemArray;
    };
    return ItemList;
}());
var fruits = new ItemList();
fruits.Add("Apple");
fruits.Add("Mango");
fruits.Add("Orange");
var listOfFruits = fruits.GetAll();
for (var i = 0; i < listOfFruits.length; i++) {
    console.log(listOfFruits[i]);
}
var numbers = new ItemList();
numbers.Add(1);
numbers.Add(2);
numbers.Add(3);
var listOfnumbers = numbers.GetAll();
for (var i = 0; i < listOfnumbers.length; i++) {
    console.log(listOfnumbers[i]);
}
var bools = new ItemList();
bools.Add(true);
bools.Add(false);
var listOfbools = bools.GetAll();
for (var i = 0; i < listOfbools.length; i++) {
    console.log(listOfbools[i]);
}
