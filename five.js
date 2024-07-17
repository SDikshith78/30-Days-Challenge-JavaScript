// 30 Days - JavaScript Challenge

// Day-5

// Task- 1 
function check (){
    let a = 11;
    if(a % 2 === 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
check();

// Task- 2
function square(a){
    return (a*a)
}
console.log(square(3));

// Task- 3
function checkMax(a,b){
    if(a > b){
        console.log(a + ", a is greater than b");
    } else{
        console.log(b + ", b is greater than a");
    }
}
checkMax(2,3)


// Task-4 
function concatenate(a, b){
    return a + b;
}
console.log(concatenate("hello ", "world"));


// Task-5
let arr = (a,b) => {
    return a+b;
}
console.log(arr(5, 7));

// Task-6 
const checking =((s, char)=>{
    return s.includes(char)
})
console.log(checking("dikshith", 'e'));

// Task-7
function para(a, b=2){
    return a*b;
}
console.log(para(7));

// Task-8 
function userData(name, age=21){
    this.name = name;
    this.age = age;
    return `Hello ${this.name} i guess your age is ${this.age}`;
}
console.log(userData("Mad"));

// Task-9
function callBack(fn, n){
    return function(){
        for(let i = 0; i < n; i++){
            fn()
        }
    }
}

function greet(){
    console.log("Hello ji");
}

let repeat = callBack(greet, 7)
repeat()

// Task-10 
function composeFunctions(func1, func2, value) {
    return func2(func1(value));
  }
  
  function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  const result = composeFunctions(addTwo, multiplyByThree, 5);
  console.log(result);
  