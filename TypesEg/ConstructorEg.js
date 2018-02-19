var Customer = /** @class */ (function () {
    //instance members with access modifiers
    function Customer(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    Customer.prototype.showDetails = function () {
        console.log(this.id + " : " + this.name + " : " + this.address);
    };
    return Customer;
}());
var c1 = new Customer(1, "Shailendra Chauhan", "Noida");
c1.showDetails(); //1 : Shailendra Chauhan : Noida
