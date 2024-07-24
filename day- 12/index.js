// 30 Days - JavaScript Challenge

// Day-12


// Task-1

function checkError() {
    const promise = new Promise((resolve, reject) => {
      reject("This is the rejected message");
    });
  
    try {
      promise.then((message) => console.log(message));
    } catch (error) {
      console.log(error);
    }
  }
  checkError();
  
  // Task-2
  
  function numberDivisibleByTwo(numerator, denominator) {
    try {
      if (denominator !== 0) {
        console.log(numerator / denominator);
      } else {
        throw new Error("Denominator cannot be zero");
      }
    } catch (error) {
      console.log(`${error.message}`);
    }
  }
  
  numberDivisibleByTwo(5, 4);
  numberDivisibleByTwo(5, 0);
  
  
  // Task-3
  
  function performTask() {
    try {
      // code that may throw and error
      console.log("Inside the try block - 1");
      // Simulating an error
      throw new Error("Simulated error");
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Inside finally block");
    }
  }
  
  console.log(performTask());
  
  
  // Task-4
  
  function isEven(num) {
    if (num === 0) {
      throw new Error("Input number cannot be zero");
    }
    try {
      if (num % 2 === 0) {
        console.log("Number is even");
      } else {
        console.log("Number is odd");
      }
    } catch (error) {
      console.log(`${error.message}`);
    }
  }
  isEven(4);
  isEven(5);
  isEven(0);
  
  // Task-5
  function checkString(str) {
    if (str === "") {
      throw new Error("Input string cannot be empty");
    }
  
    try {
      console.log(str.length);
    } catch (error) {
      console.log(`${error.message}`);
    }
  }
  
  checkString("Hi there!");
  checkString("");
  
  
  // Task-6
  
  function checkPromise() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
  
      setTimeout(() => {
        if (randomNumber < 0.5) {
          resolve("Promise resolved successfully!");
        } else {
          reject("Promise rejected.");
        }
      }, 1000);
    });
  }
  
  checkPromise()
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
  
  // Task-7
  
  async function randomPromise() {
    const promise = new Promise((resolve, reject) => {
      const randomNumber = Math.random();
  
      setTimeout(() => {
        if (randomNumber < 0.5) {
          resolve(randomNumber);
        } else {
          reject(new Error("Promise rejected"));
        }
      }, 1000);
    });
  
    try {
      const check = await promise;
      console.log("Promise resolved: " + check);
    } catch (error) {
      console.log("Promise rejected: " + error);
    }
  }
  randomPromise();
  
  
  // Task-8
  
  fetch("https://invalidurl.com/")
    .then((res) => console.log(res.json()))
    .catch((error) => console.log(error));
  
  // Task-9
  async function fetchNewData() {
    try {
      const response = await fetch("https://invalidurl.com/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  fetchNewData();