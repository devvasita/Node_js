const argu = process.argv;

function addition(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

console.log(argu);
console.log(addition(argu[2], argu[3]));
