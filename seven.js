// 30 Days - JavaScript Challenge

// Day-7

// Task-1 

let book = {
    title: "Naa Madness",
    author: "SD",
    year: 2021
}
console.log(book);

// Task-2 
console.log(book.title);
console.log(book.author);

// Task-3  
book.fullInfo = function () {
    return `There is a book called ${book.title} written by ${book.author}`
}
console.log(book.fullInfo());

// Task-4
book.updateYear = function (yr) {
    this.year = yr;
}
book.updateYear(2011)
console.log(book);

// Task-5 
const library = {
    name: "Different of India",
    books: [
        { title: "How to make life good", author: "Danny" },
        { title: "The Art Of living", author: "Sekhar" },
        { title: "The Alchemist", author: "Paulo Coelho" },
    ],
};
console.log(library);

// Task-6
console.log(`library: ${library.name}`);
library.books.forEach((e) => console.log(e.title));


// Task-7 
book.getFullStuff = function (){
    return `Title: ${this.title}, Year: ${this.year}`
}
console.log(book.getFullStuff());


// Task-8 
for (let key in book) {
    console.log(`(property) ${key} : ${book[key]} (value)`);
}

// Task- 9 
console.log(Object.keys(book));
console.log(Object.values(book));




// ---------------- Day Seven done --------------------------