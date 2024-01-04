const { resolve } = require("path");

let num1 = 10;

console.log("num1", num1);

const response = new Promise((resolve, reject) => {
  setTimeout(() => {
    num1 += 100;
    resolve(num1);
  }, 2000);
})
  .then((res) => {
    console.log("res 2", res);
    return res * 10;
  })
  .then((res) => {
    console.log("res 3", res);
    return res * 20;
  })
  .then((res) => console.log("res 4", res));
