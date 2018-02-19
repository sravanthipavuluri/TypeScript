console.log('hello typescript');
var a = "asd";
console.log(typeof (a));
var lists = [
    {
        id: 10,
        name: "hari"
    },
    {
        id: 20,
        name: "sadasd"
    },
    {
        id: 30,
        name: "sadsadas"
    }
];
lists.forEach(function (item) {
    if (item.id == "20") {
        console.log(item.name);
    }
});
var isTrue = true;
console.log(isTrue);
