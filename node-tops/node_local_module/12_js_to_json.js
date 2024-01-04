//  javascript to json convert

const Person = {
  name: "AAA",
  subject: "Node",
};

const response = function (JsData) {
  const josnData = JSON.stringify(JsData);

  console.log("JS Data", JsData);
  console.log("JSON Data", josnData);
};

response(Person);
