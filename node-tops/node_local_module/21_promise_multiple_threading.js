const waitingResonse = new Promise((res, rej) => {
  setTimeout(() => {
    res(10);
  }, 2000);
});

waitingResonse.then((res) => console.log("res1 =", res * 10));
waitingResonse.then((res) => console.log("res2 =", res * 8));
waitingResonse.then((res) => console.log("res3 =", res * 5));

// Promise Multiple Threading
