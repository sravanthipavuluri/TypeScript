var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shapes = /** @class */ (function () {
    function Shapes() {
    }
    return Shapes;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(n) {
        var _this = _super.call(this) || this;
        _this.side = 0;
        _this.side = n;
        return _this;
    }
    // implemented Area method
    Square.prototype.Area = function () {
        return this.side * this.side;
    };
    return Square;
}(Shapes));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(length, width) {
        var _this = _super.call(this) || this;
        _this.length = 0;
        _this.width = 0;
        _this.length = length;
        _this.width = width;
        return _this;
    }
    // implemented Area method
    Rectangle.prototype.Area = function () {
        return this.length * this.width;
    };
    return Rectangle;
}(Shapes));
var s = new Square(4);
console.log("Square :" + s.Area()); //16
var r = new Rectangle(4, 3);
console.log("Rectangle :" + r.Area()); //12
