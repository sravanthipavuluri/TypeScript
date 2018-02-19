abstract class Shapes {
    // must be implemented in derived classes
    abstract Area(): number;
}
class Square extends Shapes {
    side: number = 0;
    constructor(n: number) {
        super(); //mandatory to call parent class constructor
        this.side = n;
    }
    // implemented Area method
    Area(): number {
         return this.side * this.side;
    }
}
class Rectangle extends Shapes {
    length: number = 0;
    width: number = 0;
    constructor(length: number, width: number) {
        super(); //mandatory to call parent class constructor
        this.length = length;
        this.width = width;
    }
    // implemented Area method
    Area(): number {
        return this.length * this.width;
    }
}
   let s = new Square(4);
   console.log("Square :"+s.Area()); //16
    
   let r = new Rectangle(4, 3);
   console.log("Rectangle :"+r.Area()); //12