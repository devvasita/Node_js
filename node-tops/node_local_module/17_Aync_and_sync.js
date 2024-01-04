// Sync  is a single thread , so only one operation or program will run at at time

//  async is multi Thread , operation or porgram can run in parallel

//  async is non-blocking , it will send multiple requests to server.

//  == benifits : do more than one process at a time
//  == limitation : if two process depend on each other it will make problem

let num1 = 20;
let num2 = 10;

console.log("Num1 = ", num1);
console.log("Num2 = ", num2);

setTimeout(() => {
  num1 += 100;
  num2 += 200;
  console.log("process num1", num1);
  console.log("process num2", num2);
}, 2000);

console.log("adition", num1 + num2);
