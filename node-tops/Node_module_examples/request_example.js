const req = require("request");

let uri = "https://jsonplaceholder.typicode.com/posts/1";

req(uri, (err, res, body) => {
  if (err) throw err;
  console.log(res);
  console.log(res.statusCode);
  console.log(body);
});
