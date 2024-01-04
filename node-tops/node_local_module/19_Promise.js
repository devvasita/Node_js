// Promise
// allowing us to handle the result of an async task once it has completed or throw an error

// Promise are used in ES8 async functions

let num1 = 10;
let num2 = 20;

console.log("num1", num1);
console.log("num2", num2);

const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    num1 += 100;
    num2 += 200;
    // resolve(num1);
    resolve([num1, num2]); // to pass multiple parameters
  }, 2000);
});

// response.then((num1) => console.log(num1 + num2));

response.then((res) => console.log(res[0] + res[1]));
