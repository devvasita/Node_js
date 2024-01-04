function waitingResponse() {}
const res = waitingResponse();
console.log(res);

// Output : undefined => by default function expecting return value if it does not return anything it display undefined

async function newResponse() {
  return 0;
} //it will return resolved promise

async function response2() {
  throw new Error("Something went wrong");
} //it will return rejected promise

const res2 = response2();
console.log(res2);
