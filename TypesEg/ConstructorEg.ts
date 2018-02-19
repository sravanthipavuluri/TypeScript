class Customer {
    //instance members with access modifiers
    constructor(private id:number, private name:string, private address:string) { }
    showDetails() {
    console.log(this.id + " : " + this.name + " : " + this.address);
    }
   }
    
   let c1 = new Customer(1, "Shailendra Chauhan", "Noida");
   c1.showDetails(); //1 : Shailendra Chauhan : Noida
   