var Booklist = /** @class */ (function () {
    function Booklist(name) {
        this.name = name;
        //instance members
        this.books = []; //instance property or instance member
    }
    Booklist.prototype.addBook = function (book) {
        if (this.books.length >= Booklist.maxBookCount) {
            throw new Error('Booklist is full');
        }
        else {
            this.books.push(book);
            Booklist.totalBooksCount++;
        }
    };
    Booklist.totalBooks = function () {
        return Booklist.totalBooksCount;
    };
    //static members
    Booklist.totalBooksCount = 0;
    Booklist.maxBookCount = 20;
    return Booklist;
}());
var booklist = new Booklist('My Book List');
// acessing instance members using class instance
var listName = booklist.name;
console.log(listName);
booklist.addBook("Gurukulsight - TypeScript Training Book");
booklist.addBook("Gurukulsight - Angular2 Training Book");
// accessing static members using class name
var maxBooks = Booklist.maxBookCount; //20
var totalBooks = Booklist.totalBooks(); //2
console.log(maxBooks);
console.log(totalBooks);
