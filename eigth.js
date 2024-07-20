// 30 Days - JavaScript Challenge

// Day-8

// Task-1 
const data = {
    name: "John",
    age: 25,
    city: "New York"
}
console.log(`${data.name} ${data.age} ${data.city}`);

// Task-2
console.log(`${data.name} 
    ${data.age} 
    ${data.city}`);

// Task-3
const a = [1,2,3,4,5]
let [x,y] = a
console.log(x,y);

// Task-4 
const book = {
    title: "To Kill a Mockingbird",
    year: 1960,
    author: "Harper Lee",
}
const {title, author} = book
console.log(title, author);


// Task-5 
let b= [1,2,3,4,5]
let c = [...b, 6]
console.log("The value of b:  " + b);
console.log("The value of c:  " + c);

// Task-6 
const sum = (...rest) => {
    let total = 0;
    for (let elem of rest) {
        total += elem;
    }
    return total;
}

const summation = sum(10, 20, 30, 40, 50);
console.log(`The summation is ${summation}`);


// Task-7 

const product = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log(product(11, 5)); 

console.log(product(11)); 


// Task 8 

// Properties
const id = 100;
const position = "Junior Developer";
const experience = "11 months";
const salary = 700000;

// Method
const vision = () => {
    return (`Learn techincal skills and explore more.`);
}

const employee = { id, position, experience, salary, vision };

console.log(employee);
console.log(employee.vision());

console.log();

// Task 9 : 

const propName1 = "name";
const propName2 = "age";
const propName3 = "hobby";

const person = {
    [propName1]: "Kat Runner",
    [propName2]: 21,
    [propName3]: "Cricket"
}

console.log(person);


// ---------------- Day Eighth done --------------------------
