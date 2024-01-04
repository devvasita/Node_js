const month = process.argv;

console.log(month[2]);

const days = new Promise((resolve, reject) => {
  resolve(Number(month[2]));
})
  .then((res) => res * 30)
  .then((res) => console.log("Days = ", res));
