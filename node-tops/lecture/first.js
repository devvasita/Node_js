// let inputValue = prompt();

let list = [];

// for (let i = 0; i < 5; i++) {
//   var values = prompt(` Enter ${i + 1} value`);

//   console.log(values);
//   list.push(values);
// }

// console.log(list);

// let values = ["one", "two", "three", "four", "five"];

// for (i = 0; i < values.length; i++) {
//   //   console.log(values[i]);
// }

// let data = [];

// for (let i = 0; i < 3; i++) {
//   var userValue = prompt("enter three values");
//   data.push(userValue);
// }

//########## spilce ==> add or remove elements in array

// ex => fruits.splice(index ,howmany,item1,...itemx )

//index ==> form where to remove or add

// how many ==> how mant elements you want to remove

// items ==> elements

const fruits = ["banana", "mango", "apple", "kiwi", "guvava", "watermelon"];

fruits[2] = "any";
console.log(fruits.indexOf("guvava"));

fruits.splice(0, 2, "berry");

console.log(fruits);

// console.log(data);
