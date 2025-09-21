function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

console.log(Book);

const book1 = new Book("hobbit", "JKrowling", "200", "not read");
console.log(book1);
console.log(book1.info());