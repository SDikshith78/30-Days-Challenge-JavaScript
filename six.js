// 30 Days - JavaScript Challenge

// Day-6

// Task- 1

const a = [1,2,3,4,5]
console.log(a);

// Task- 2
const b = [1,2,3,4,5]
console.log(b[0], b[4]);

// Task- 3-6
let c = [1,2,3,4,5]
console.log(c.push(7));
console.log(c);

console.log(c.pop());
console.log(c);

console.log(c.shift());
console.log(c);

console.log(c.unshift(11));
console.log(c);

// Task- 7
let d = [1,2,3,4,5]
console.log(d.map(i => i*2));

// Task- 8
let e= [1,2,3,4,5]
f = e.filter(i => i % 2 == 0);
console.log(f);

// Task- 9
let g= [1,2,3,4,5]
h = g.reduce((acc, obj) => acc + obj, 0);
console.log(h);

// Task- 10
let loop= [1,2,3,4,5]
for(let i = 0; i< loop.length; i++){
    console.log(loop[i]);
}
// Task- 11
let ds= [1,2,3,4,5]
ds.forEach(f => console.log("Using ForEach " + f))


// Task- 12 
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(`matrix: ${matrix}`);

// Task- 13 
const pick = matrix[2][0]
console.log(`picking from matrix: ${pick}`);


// ---------------------------------- Day- 6 Done --------------------------------