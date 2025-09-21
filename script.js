const myLibrary = []; //this is the array where books are stored

function Book (title, author, pages, read, uuid) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uuid = crypto.randomUUID();
    this.info = function() {
        return`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

console.log(Book);

const book1 = new Book("hobbit", "JKrowling", "200", "not read");
console.log(book1);
console.log(book1.info());

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}


addBookToLibrary("1984", "Orwell", 300, "read");
console.log(myLibrary)