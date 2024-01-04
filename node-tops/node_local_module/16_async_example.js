// Node follows async

console.log("process 1 ");

setTimeout(() => {
  console.log("Process 2");
}, 3000);

console.log("process 3");
