// await : await makes sure to wait till a promise is settled be it resolved or rejected

// we write then() for handling prmoise so far , now we have "await" , so , now we can remove then() and replace it with "await"

// await should used in async function

const square = (num) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(num * num);
    }, 2000);
  });
};

// async function displayResult() {
//   var res = await square(5);
//   return console.log(res);
// }

async function displayResult() {
  var res = await square(2);
  console.log(res);
  var res1 = await square(res);
  console.log(res1);
  var res2 = await square(res1);
  console.log(res2);
}

displayResult();
