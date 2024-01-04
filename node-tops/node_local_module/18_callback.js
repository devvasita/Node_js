// Call Back : allows a function to call another function
//  A callback function can run after another function has finished

// const addition = function (num1, num2) {
//   return num1 + num2;
// };

// function square(result, callback) {
//   return result * callback(10, 20);
// }

// console.log(square(10, addition));

function outerFunction(outerValue) {
  return function (innerValue) {
    console.log(outerValue + innerValue);
  };
}
outerFunction(10)(5);
