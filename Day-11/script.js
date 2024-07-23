// 30 days challenge

// Day-11 

// Task-1

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Promise Resolved");
    }, 2000);
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// Task-2

const promises = new Promise((resolve, reject) =>{
    setTimeout((() => {
        if(11 === 21){
            resolve("Equal");
        }else{
            reject("Not Equal");
        }
    }),2000)
})
promises.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});


// Task- 3 
const fetchData1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
  const fetchData2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 1500);
  });
  const fetchData3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 2000);
  });
  
  fetchData1
    .then((result) => {
      console.log(result);
      return fetchData2;
    })
    .then((result) => {
      console.log(result);
      return fetchData3;
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));


// Task- 4
const async_func = async () => {
    const delay_promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is a promise delayed by 3.5 seconds");
      }, 3500);
    });
  
    try {
      const data = await delay_promise;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  async_func();
  
  //• Task 5
  const error_func = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise is rejected and handled using catch block");
      }, 4000);
    });
  
    try {
      const data = await promise;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  error_func();


//   Task-6 
fetch("https://v2.jokeapi.dev/joke/Dark")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network Error" + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    if (data.joke) {
      console.log(data.joke);
    }
    console.log(`Dark Joke: ${data.setup} : ${data.delivery}`);
  })
  .catch((error) => {
    console.log(error);
  });

//• Task 7
async function fetchAPI() {
  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Spooky");
    if (!res.ok) {
      throw new Error("Network Error" + res.statusText);
    }
    const data = await res.json();
    if (data.joke) {
      console.log(data.joke);
    }
    console.log(`Spooky Joke: ${data.setup} : ${data.delivery}`);
  } catch (error) {
    console.log("There was a problem with the fetch operation:" + error);
  }
}
fetchAPI();

//• Task 8
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 5000);
});
const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 4500);
});
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 5500);
});

Promise.all([promise_1, promise_2, promise_3])
  .then((values) => {
    console.log("All promises Resolved");
    values.forEach((value, i) => {
      console.log(`Promise ${i + 1}: ${value}`);
    });
  })
  .catch((error) => console.log("One of the promises failed" + error));

//• Task 9
Promise.race([promise_1, promise_2, promise_3]).then((winner) => {
  console.log(`First resolved promise is: ${winner}`);
});